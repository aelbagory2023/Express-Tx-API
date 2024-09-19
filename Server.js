// Import required modules
const Moralis = require("moralis");
const express = require("express");
const cors = require("cors");
const { Connection, PublicKey } = require("@solana/web3.js");
const fetch = require("node-fetch");

require("dotenv").config();

const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// Define the server port
const PORT = process.env.PORT || 3000;

// Initialize Moralis

async function initializeMoralis() {
  try {
    await Mralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwNTljNWUyLTg5ZDMtNDBmNi04MzRkLWQ1NGY2MmU3M2RiMyIsIm9yZ0lkIjoiNDA4NjUxIiwidXNlcklkIjoiNDE5OTE2IiwidHlwZUlkIjoiZTIyNzk0ZmQtZWYxNy00YjMyLWE5MDItY2E3ZjUzZWNiZGQyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY1OTk1NDYsImV4cCI6NDg4MjM1OTU0Nn0.wFIhNrG2SDOfWl2hawVg0qvxLmekMdvzXJ00o3Nq1iw",
    });

    const response = await Moralis.EvmApi.wallets.getWalletHistory({});

    console.log(response.raw);
  } catch (e) {
    console.error(e);
  }
}

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
