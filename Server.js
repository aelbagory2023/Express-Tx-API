// Import required modules
const Moralis = require("moralis");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const solanaweb3 = require("@solana/web3.js");

require("dotenv").config();

const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// Define the server port
const PORT = process.env.PORT || 3000;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-Key":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwNTljNWUyLTg5ZDMtNDBmNi04MzRkLWQ1NGY2MmU3M2RiMyIsIm9yZ0lkIjoiNDA4NjUxIiwidXNlcklkIjoiNDE5OTE2IiwidHlwZUlkIjoiZTIyNzk0ZmQtZWYxNy00YjMyLWE5MDItY2E3ZjUzZWNiZGQyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY1OTk1NDYsImV4cCI6NDg4MjM1OTU0Nn0.wFIhNrG2SDOfWl2hawVg0qvxLmekMdvzXJ00o3Nq1iw",
  },
};
// Define a route to handle the API request
app.get("/api/wallet-history/:address/:chain", async (req, res) => {
  try {
    const { address, chain } = req.params;

    if (!address || !chain) {
      return res
        .status(400)
        .json({ error: "Address and chain are required parameters" });
    }

    const now = Math.floor(Date.now() / 1000); // Current Unix timestamp
    const yesterday = now - 24 * 60 * 60; // Unix timestamp for 24 hours ago

    const to_date = now;
    const from_date = yesterday;

    const response = await fetch(
      `https://deep-index.moralis.io/api/v2.2/wallets/${address}/history?chain=${chain}&order=DESC&from_date=${from_date}&to_date=${to_date}`,
      options
    );
    const data = await response.json();
    console.log(data); // Log the response to the console
    res.json(data); // Send the response as JSON to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/api/sol-Wallet-history/:address", async (req, res) => {
  try {
    const { address } = req.params;

    if (!address) {
      return res.status(400).json({ error: "Address is a required parameter" });
    }

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "ab9adsP2ivQCujdx");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://api.shyft.to/sol/v1/transaction/history?network=mainnet-beta&tx_num=100&account=${address}&enable_raw=true`,
      requestOptions
    );

    const data = await response.json();
    console.log(data); // Log the response to the console
    res.json(data); // Send the response as JSON to the client
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
