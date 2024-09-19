// Import required modules
const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
const path = require("path");
const { Connection, PublicKey } = require("@solana/web3.js");
const app = express();
const axios = require("axios");
require("dotenv").config();

// Define supported chains
const SUPPORTED_CHAINS = {
  eth: { name: "Ethereum", moralisChain: "eth", nativeSymbol: "ETH" },
  arbitrum: { name: "Arbitrum", moralisChain: "arbitrum", nativeSymbol: "ETH" },
  base: { name: "Base", moralisChain: "base", nativeSymbol: "ETH" },
  solana: { name: "Solana", moralisChain: "solana", nativeSymbol: "SOL" },
};

// Middleware setup
app.use(express.json()); // Parse JSON request bodies

// Define the server port
const PORT = process.env.PORT || 3000;

// Define routes
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const CRYPTOCOMPARE_API_KEY =
  "0edf6957392e58644fda88a1d5fe983ae099a5383b931255275dab0d8ee2d736";
const MORALIS_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwNTljNWUyLTg5ZDMtNDBmNi04MzRkLWQ1NGY2MmU3M2RiMyIsIm9yZ0lkIjoiNDA4NjUxIiwidXNlcklkIjoiNDE5OTE2IiwidHlwZUlkIjoiZTIyNzk0ZmQtZWYxNy00YjMyLWE5MDItY2E3ZjUzZWNiZGQyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY1OTk1NDYsImV4cCI6NDg4MjM1OTU0Nn0.wFIhNrG2SDOfWl2hawVg0qvxLmekMdvzXJ00o3Nq1iw";
const SOLANA_RPC_URL = "https://api.mainnet-beta.solana.com"; // Replace with your Solana RPC URL if using a different provider

if (!MORALIS_API_KEY) {
  console.error("MORALIS_API_KEY is not set in the environment variables");
  process.exit(1);
}

// Helper functions (keep your existing helper functions)

async function getHistoricalPrice(date, symbol) {
  const timestamp = Math.floor(date.getTime() / 1000);
  const response = await axios.get(
    "https://min-api.cryptocompare.com/data/v2/histoday",
    {
      params: {
        fsym: symbol,
        tsym: "USD",
        toTs: timestamp,
        limit: 1,
      },
      headers: {
        authorization: `Apikey ${CRYPTOCOMPARE_API_KEY}`,
      },
    }
  );
  return response.data.Data.Data[0].close;
}

async function getCurrentPrice(symbol) {
  const response = await axios.get(
    "https://min-api.cryptocompare.com/data/price",
    {
      params: {
        fsym: symbol,
        tsyms: "USD",
      },
      headers: {
        authorization: `Apikey ${CRYPTOCOMPARE_API_KEY}`,
      },
    }
  );
  return response.data.USD;
}

async function fetchMoralisTransactions(address, fromDate, chain) {
  const fromTimestamp = fromDate.toISOString();
  console.log(
    `Fetching transactions for ${address} from ${fromTimestamp} on ${chain}`
  );

  const [txResponse, tokenTxResponse] = await Promise.all([
    axios.get(`https://deep-index.moralis.io/api/v2.2/${address}`, {
      params: {
        chain: SUPPORTED_CHAINS[chain].moralisChain,
        from_date: fromTimestamp,
        limit: 100,
      },
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": MORALIS_API_KEY,
      },
    }),
    axios.get(
      `https://deep-index.moralis.io/api/v2.2/${address}/erc20transfers`,
      {
        params: {
          chain: SUPPORTED_CHAINS[chain].moralisChain,
          from_date: fromTimestamp,
          limit: 100,
        },
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": MORALIS_API_KEY,
        },
      }
    ),
  ]);

  return { txResponse, tokenTxResponse };
}

async function fetchSolanaTransactions(address, fromDate) {
  const connection = new Connection(SOLANA_RPC_URL);
  const pubKey = new PublicKey(address);
  const transactions = await connection.getSignaturesForAddress(pubKey, {
    limit: 100,
    before: fromDate.toISOString(),
  });

  const txDetails = await Promise.all(
    transactions.map((tx) =>
      connection.getTransaction(tx.signature, {
        maxSupportedTransactionVersion: 0,
      })
    )
  );

  return txDetails.filter((tx) => tx !== null);
}

async function processTransactions(transactions, tokenTransfers, chain) {
  const currentPrice = await getCurrentPrice(
    SUPPORTED_CHAINS[chain].nativeSymbol
  );

  let processedData = [];
  for (const transaction of transactions) {
    const valueNative =
      chain === "solana"
        ? transaction.meta.postBalances[0] - transaction.meta.preBalances[0]
        : weiToEther(transaction.value);

    const transactionDate = new Date(
      chain === "solana"
        ? transaction.blockTime * 1000
        : transaction.block_timestamp
    );
    const historicalPrice = await getHistoricalPrice(
      transactionDate,
      SUPPORTED_CHAINS[chain].nativeSymbol
    );

    const valueUSD = valueNative * historicalPrice;
    const currentValueUSD = valueNative * currentPrice;
    const priceChangeUSD = currentValueUSD - valueUSD;
    const priceChangePercent =
      valueUSD !== 0 ? ((currentValueUSD - valueUSD) / valueUSD) * 100 : 0;

    const priceChangeFormatted = `$${Math.abs(priceChangeUSD).toFixed(2)} (${
      priceChangePercent >= 0 ? "+" : "-"
    }${Math.abs(priceChangePercent).toFixed(2)}%)`;

    const type =
      chain === "solana"
        ? transaction.meta.postBalances[0] > transaction.meta.preBalances[0]
          ? "Incoming"
          : "Outgoing"
        : transaction.from_address.toLowerCase() === address.toLowerCase()
        ? "Outgoing"
        : "Incoming";

    // Token transfer logic (for EVM chains)
    let tokenInfo = null;
    if (chain !== "solana" && tokenTransfers) {
      const tokenTransfer = tokenTransfers.find(
        (tt) => tt.transaction_hash === transaction.hash
      );
      if (tokenTransfer) {
        tokenInfo = {
          symbol: tokenTransfer.symbol,
          name: tokenTransfer.name,
          decimals: tokenTransfer.decimals,
          amount:
            parseFloat(tokenTransfer.value) /
            Math.pow(10, tokenTransfer.decimals),
          contractAddress: tokenTransfer.address,
        };
      }
    }

    processedData.push({
      hash:
        chain === "solana"
          ? transaction.transaction.signatures[0]
          : transaction.hash,
      from:
        chain === "solana"
          ? transaction.transaction.message.accountKeys[0].toString()
          : transaction.from_address,
      to:
        chain === "solana"
          ? transaction.transaction.message.accountKeys[1].toString()
          : transaction.to_address,
      valueNative: parseFloat(valueNative.toFixed(6)),
      valueUSD: parseFloat(valueUSD.toFixed(2)),
      currentValueUSD: parseFloat(currentValueUSD.toFixed(2)),
      priceChangeUSD: parseFloat(priceChangeUSD.toFixed(2)),
      priceChangePercent: parseFloat(priceChangePercent.toFixed(2)),
      priceChangeFormatted: priceChangeFormatted,
      gasNative:
        chain === "solana"
          ? transaction.meta.fee / 1e9
          : parseFloat(
              ((transaction.gas_price * transaction.gas) / 1e18).toFixed(6)
            ),
      gasUSD: parseFloat(
        (chain === "solana"
          ? (transaction.meta.fee / 1e9) * historicalPrice
          : ((transaction.gas_price * transaction.gas) / 1e18) * historicalPrice
        ).toFixed(2)
      ),
      timestamp:
        chain === "solana"
          ? new Date(transaction.blockTime * 1000).toISOString()
          : transaction.block_timestamp,
      type: type,
      tokenInfo: tokenInfo,
      chain: SUPPORTED_CHAINS[chain].name,
    });
  }

  return processedData;
}

// Endpoint for different timeframes and chains
app.get("/api/wallet-history/:timeframe/:address/:chain", async (req, res) => {
  const { timeframe, address, chain } = req.params;
  let fromDate;

  if (!SUPPORTED_CHAINS[chain]) {
    return res.status(400).json({ error: "Unsupported chain" });
  }

  switch (timeframe) {
    case "24h":
      fromDate = getDateFromPast(24, "hours");
      break;
    case "7d":
      fromDate = getDateFromPast(7, "days");
      break;
    case "30d":
      fromDate = getDateFromPast(30, "days");
      break;
    case "1y":
      fromDate = getDateFromPast(1, "years");
      break;
    default:
      return res.status(400).json({ error: "Invalid timeframe" });
  }

  try {
    let transactions, tokenTransfers;
    if (chain === "solana") {
      transactions = await fetchSolanaTransactions(address, fromDate);
      tokenTransfers = null; // Solana doesn't use ERC20 transfers
    } else {
      const { txResponse, tokenTxResponse } = await fetchMoralisTransactions(
        address,
        fromDate,
        chain
      );
      transactions = txResponse.data.result;
      tokenTransfers = tokenTxResponse.data.result;
    }

    const processedTransactions = await processTransactions(
      transactions,
      tokenTransfers,
      chain
    );
    res.json({
      address,
      transactionCount: processedTransactions.length,
      transactions: processedTransactions,
      chain: SUPPORTED_CHAINS[chain].name,
    });
  } catch (error) {
    console.error(
      `Error fetching ${timeframe} wallet history for ${chain}:`,
      error
    );
    console.error(error.stack); // Add this line to get more detailed error information
    res.status(500).json({
      error: "Failed to fetch wallet history",
      details: error.message,
    });
  }
});

// Add this near the end of your server.js file, before app.listen()
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "An unexpected error occurred",
    details: err.message,
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

function getDateFromPast(amount, unit) {
  const now = new Date();
  switch (unit) {
    case "hours":
      return new Date(now.getTime() - amount * 60 * 60 * 1000);
    case "days":
      return new Date(now.getTime() - amount * 24 * 60 * 60 * 1000);
    case "years":
      return new Date(
        now.getFullYear() - amount,
        now.getMonth(),
        now.getDate()
      );
    default:
      throw new Error("Invalid time unit");
  }
}
