// Import required modules
const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config();

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

// Moralis API setup
const MORALIS_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwNTljNWUyLTg5ZDMtNDBmNi04MzRkLWQ1NGY2MmU3M2RiMyIsIm9yZ0lkIjoiNDA4NjUxIiwidXNlcklkIjoiNDE5OTE2IiwidHlwZUlkIjoiZTIyNzk0ZmQtZWYxNy00YjMyLWE5MDItY2E3ZjUzZWNiZGQyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY1OTk1NDYsImV4cCI6NDg4MjM1OTU0Nn0.wFIhNrG2SDOfWl2hawVg0qvxLmekMdvzXJ00o3Nq1iw";
if (!MORALIS_API_KEY) {
  console.error("MORALIS_API_KEY is not set in the environment variables");
  process.exit(1);
}

// Helper function to convert Wei to Ether
function weiToEther(wei) {
  return parseFloat(wei) / 1e18;
}

// Helper function to get date from X hours/days/years ago
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
  }
}

async function getHistoricalEthPrice(date) {
  const timestamp = Math.floor(date.getTime() / 1000);
  const response = await axios.get(
    "https://min-api.cryptocompare.com/data/v2/histoday",
    {
      params: {
        fsym: "ETH",
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

async function getCurrentEthPrice() {
  const response = await axios.get(
    "https://min-api.cryptocompare.com/data/price",
    {
      params: {
        fsym: "ETH",
        tsyms: "USD",
      },
      headers: {
        authorization: `Apikey ${CRYPTOCOMPARE_API_KEY}`,
      },
    }
  );
  return response.data.USD;
}

async function fetchAndProcessTransactions(address, fromDate) {
  const fromTimestamp = fromDate.toISOString();
  console.log(`Fetching transactions for ${address} from ${fromTimestamp}`);

  const response = await axios.get(
    `https://deep-index.moralis.io/api/v2.2/${address}`,
    {
      params: {
        chain: "eth",
        from_date: fromTimestamp,
        limit: 100,
      },
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": MORALIS_API_KEY,
      },
    }
  );

  const currentEthPrice = await getCurrentEthPrice();

  let processedData = [];
  if (
    response.data &&
    response.data.result &&
    Array.isArray(response.data.result)
  ) {
    processedData = await Promise.all(
      response.data.result.map(async (transaction) => {
        const gasPrice = weiToEther(transaction.gas_price);
        const gasCostETH = gasPrice * transaction.gas;
        const valueETH = weiToEther(transaction.value);

        const transactionDate = new Date(transaction.block_timestamp);
        const historicalEthPrice = await getHistoricalEthPrice(transactionDate);

        const gasCostUSD = gasCostETH * historicalEthPrice;
        const valueUSD = valueETH * historicalEthPrice;

        const currentValueUSD = valueETH * currentEthPrice;
        const priceChangeUSD = currentValueUSD - valueUSD;
        const priceChangePercent =
          valueUSD !== 0 ? ((currentValueUSD - valueUSD) / valueUSD) * 100 : 0;

        const priceChangeFormatted = `$${Math.abs(priceChangeUSD).toFixed(
          2
        )} (${priceChangePercent >= 0 ? "+" : "-"}${Math.abs(
          priceChangePercent
        ).toFixed(2)}%)`;

        const type =
          transaction.from_address.toLowerCase() === address.toLowerCase()
            ? "Outgoing"
            : "Incoming";

        return {
          hash: transaction.hash,
          from: transaction.from_address,
          to: transaction.to_address,
          valueETH: parseFloat(valueETH.toFixed(6)),
          valueUSD: parseFloat(valueUSD.toFixed(2)),
          currentValueUSD: parseFloat(currentValueUSD.toFixed(2)),
          priceChangeUSD: parseFloat(priceChangeUSD.toFixed(2)),
          priceChangePercent: parseFloat(priceChangePercent.toFixed(2)),
          priceChangeFormatted: priceChangeFormatted,
          gasETH: parseFloat(gasCostETH.toFixed(6)),
          gasUSD: parseFloat(gasCostUSD.toFixed(2)),
          timestamp: transaction.block_timestamp,
          type: type,
        };
      })
    );
  }

  return processedData;
}

// Endpoint for different timeframes
app.get("/api/wallet-history/:timeframe/:address", async (req, res) => {
  const { timeframe, address } = req.params;
  let fromDate;

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
    const transactions = await fetchAndProcessTransactions(address, fromDate);
    res.json({ address, transactionCount: transactions.length, transactions });
  } catch (error) {
    console.error(`Error fetching ${timeframe} wallet history:`, error);
    res.status(500).json({
      error: "Failed to fetch wallet history",
      details: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
