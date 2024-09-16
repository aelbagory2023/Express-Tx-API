require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const CHAIN_INFO = {
  1: { name: "Ethereum", symbol: "ETH", decimals: 18, coingeckoId: "ethereum" },
  137: {
    name: "Polygon",
    symbol: "MATIC",
    decimals: 18,
    coingeckoId: "matic-network",
  },
  56: {
    name: "Binance Smart Chain",
    symbol: "BNB",
    decimals: 18,
    coingeckoId: "binancecoin",
  },
  43114: {
    name: "Avalanche C-Chain",
    symbol: "AVAX",
    decimals: 18,
    coingeckoId: "avalanche-2",
  },
  // Add more chains as needed
};

app.get("/api/transactions", async (req, res) => {
  const { address, chainId } = req.query;

  if (!address || !chainId) {
    return res.status(400).json({ error: "Address and chainId are required" });
  }

  try {
    const apiKey = process.env.COVALENT_API_KEY;
    if (!apiKey) {
      throw new Error("Covalent API key is not set");
    }

    const chainInfo = CHAIN_INFO[chainId];
    if (!chainInfo) {
      throw new Error("Unsupported chain ID");
    }

    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?key=${apiKey}&page-size=10&page-number=0`;

    console.log("Requesting URL:", url);

    const response = await axios.get(url);

    if (response.data && response.data.data && response.data.data.items) {
      // Fetch current price for the chain's native currency
      let price = 0;
      try {
        const priceResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${chainInfo.coingeckoId}&vs_currencies=usd`
        );
        price = priceResponse.data[chainInfo.coingeckoId].usd;
      } catch (priceError) {
        console.error("Error fetching price:", priceError);
        // If price fetch fails, we'll use 0 as the price
      }

      const transactions = response.data.data.items.slice(0, 10).map((tx) => {
        const valueInNative =
          parseFloat(tx.value) / Math.pow(10, chainInfo.decimals);
        const valueInUsd = valueInNative * price;

        // Calculate fee
        const gasPrice = parseFloat(tx.gas_price) / Math.pow(10, 9); // Convert to Gwei
        const gasUsed = parseFloat(tx.gas_spent);
        const feeInNative = (gasPrice * gasUsed) / Math.pow(10, 9); // Convert Gwei to native token
        const feeInUsd = feeInNative * price;

        return {
          txHash: tx.tx_hash,
          from: tx.from_address,
          to: tx.to_address,
          valueNative: valueInNative.toFixed(8),
          valueUsd: valueInUsd.toFixed(2),
          feeNative: feeInNative.toFixed(8),
          feeUsd: feeInUsd.toFixed(2),
          blockSignedAt: tx.block_signed_at,
        };
      });

      res.json({ transactions, chainInfo });
    } else {
      res.status(400).json({ error: "No data returned from Covalent API" });
    }
  } catch (error) {
    console.error("Error details:", error);
    if (error.response && error.response.status === 501) {
      res.status(501).json({
        error: "This chain is not supported by the Covalent API",
        supportedChains: Object.keys(CHAIN_INFO).map(
          (id) => `${CHAIN_INFO[id].name} (Chain ID: ${id})`
        ),
      });
    } else {
      res.status(500).json({
        error: "Failed to fetch transactions",
        details: error.message,
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
