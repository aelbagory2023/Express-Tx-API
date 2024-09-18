// Import required modules
const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
const path = require("path");
const app = express();
const axios = require("axios"); // Add this import
require("dotenv").config();
const moment = require("moment"); // Make sure to install this: npm install moment
const CoinGecko = require("coingecko-api");
const coinGeckoClient = new CoinGecko();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies

// Define the server port
// Use the environment variable PORT if available, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Define routes
// Example route:
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Moralis API setup
const MORALIS_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwNTljNWUyLTg5ZDMtNDBmNi04MzRkLWQ1NGY2MmU3M2RiMyIsIm9yZ0lkIjoiNDA4NjUxIiwidXNlcklkIjoiNDE5OTE2IiwidHlwZUlkIjoiZTIyNzk0ZmQtZWYxNy00YjMyLWE5MDItY2E3ZjUzZWNiZGQyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY1OTk1NDYsImV4cCI6NDg4MjM1OTU0Nn0.wFIhNrG2SDOfWl2hawVg0qvxLmekMdvzXJ00o3Nq1iw";

if (!MORALIS_API_KEY) {
  console.error("MORALIS_API_KEY is not set in the environment variables");
  process.exit(1);
}

// Helper function to fetch and process transactions
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

  const ethPriceResponse = await coinGeckoClient.simple.price({
    ids: ["ethereum"],
    vs_currencies: ["usd"],
  });
  const ethPriceUSD = ethPriceResponse.data.ethereum.usd;

  let processedData = [];
  if (
    response.data &&
    response.data.result &&
    Array.isArray(response.data.result)
  ) {
    processedData = response.data.result.map((transaction) => {
      const gasPrice = parseFloat(transaction.gas_price) / 1e18; // Convert wei to ether
      const gasCostETH = gasPrice * parseFloat(transaction.gas);
      const gasCostUSD = gasCostETH * ethPriceUSD;
      const valueETH = parseFloat(transaction.value) / 1e18; // Convert wei to ether
      const valueUSD = valueETH * ethPriceUSD;

      const type =
        transaction.from_address.toLowerCase() === address.toLowerCase()
          ? "Outgoing"
          : "Incoming";

      return {
        hash: transaction.hash,
        from: transaction.from_address,
        to: transaction.to_address,
        valueETH: parseFloat(valueETH),
        valueUSD: parseFloat(valueUSD.toFixed(2)),
        gasETH: parseFloat(gasCostETH.toFixed(6)),
        gasUSD: parseFloat(gasCostUSD.toFixed(2)),
        timestamp: transaction.block_timestamp,
        type: type,
      };
    });
  }

  return processedData;
}

// 24 hours endpoint
app.get("/api/wallet-history/24h/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const fromDate = moment().subtract(24, "hours");
    const transactions = await fetchAndProcessTransactions(address, fromDate);
    res.json({ address, transactionCount: transactions.length, transactions });
  } catch (error) {
    console.error("Error fetching 24h wallet history:", error);
    res.status(500).json({
      error: "Failed to fetch wallet history",
      details: error.message,
    });
  }
});

// 7 days endpoint
app.get("/api/wallet-history/7d/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const fromDate = moment().subtract(7, "days");
    const transactions = await fetchAndProcessTransactions(address, fromDate);
    res.json({ address, transactionCount: transactions.length, transactions });
  } catch (error) {
    console.error("Error fetching 7d wallet history:", error);
    res.status(500).json({
      error: "Failed to fetch wallet history",
      details: error.message,
    });
  }
});

// 30 days endpoint
app.get("/api/wallet-history/30d/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const fromDate = moment().subtract(30, "days");
    const transactions = await fetchAndProcessTransactions(address, fromDate);
    res.json({ address, transactionCount: transactions.length, transactions });
  } catch (error) {
    console.error("Error fetching 30d wallet history:", error);
    res.status(500).json({
      error: "Failed to fetch wallet history",
      details: error.message,
    });
  }
});

// 1 year endpoint
app.get("/api/wallet-history/1y/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const fromDate = moment().subtract(1, "year");
    const transactions = await fetchAndProcessTransactions(address, fromDate);
    res.json({ address, transactionCount: transactions.length, transactions });
  } catch (error) {
    console.error("Error fetching 1y wallet history:", error);
    res.status(500).json({
      error: "Failed to fetch wallet history",
      details: error.message,
    });
  }
});

// Unified endpoint for different timeframes
app.get("/api/wallet-history/:timeframe/:address", async (req, res) => {
  const { timeframe, address } = req.params;
  let fromDate;

  switch (timeframe) {
    case "24h":
      fromDate = moment().subtract(24, "hours");
      break;
    case "7d":
      fromDate = moment().subtract(7, "days");
      break;
    case "30d":
      fromDate = moment().subtract(30, "days");
      break;
    case "1y":
      fromDate = moment().subtract(1, "year");
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

const fetchAssets = async (address) => {
  if (process.env.REACT_APP_MORALIS_API_KEY) {
    try {
      // Replace this URL with the actual API endpoint ${address}
      const response = await fetch(
        `https://deep-index.moralis.io/api/v2.2/wallets/${address}/history`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": MORALIS_API_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data.result);
      setAssets(data.result);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  } else {
    console.error("No Moralis API key in .env");
  }
};

const handleInputChange = (e) => {
  setAddress(e.target.value);
};

// Function to handle button click
const handleButtonClick = () => {
  fetchAssets(address);
};

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
