// Import required modules
const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
const path = require("path");
const app = express();
const axios = require("axios"); // Add this import
require("dotenv").config();
const moment = require("moment"); // Make sure to install this: npm install moment

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

// API endpoint to fetch wallet history
app.get("/api/wallet-history/:address", async (req, res) => {
  const { address } = req.params;

  try {
    console.log(`Fetching wallet history for address: ${address}`);

    // Calculate the timestamp for 24 hours ago
    const fromDate = moment().subtract(24, "hours").toDate();
    const fromTimestamp = fromDate.toISOString();

    const response = await axios.get(
      `https://deep-index.moralis.io/api/v2.2/${address}`,
      {
        params: {
          chain: "eth", // or the appropriate chain
          from_date: fromTimestamp,
        },
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": MORALIS_API_KEY,
        },
      }
    );

    console.log(
      "Moralis API response:",
      JSON.stringify(response.data, null, 2)
    );

    // Process the data
    let processedData = [];
    if (response.data && Array.isArray(response.data)) {
      processedData = response.data
        .filter((transaction) =>
          moment(transaction.block_timestamp).isAfter(fromDate)
        )
        .map((transaction) => ({
          hash: transaction.hash,
          from: transaction.from_address,
          to: transaction.to_address,
          value: transaction.value,
          gas: transaction.gas,
          gasPrice: transaction.gas_price,
          timestamp: transaction.block_timestamp,
        }));
    }

    res.json({
      address: address,
      transactionCount: processedData.length,
      transactions: processedData,
    });
  } catch (error) {
    console.error(
      "Error fetching wallet history:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({
        error: "Failed to fetch wallet history",
        details: error.response?.data || error.message,
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
            "X-API-Key": process.env.MORALIS_API_KEY,
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
