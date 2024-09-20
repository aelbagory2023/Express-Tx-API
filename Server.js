/**
 * @swagger
 * /api/wallet-history/{address}/{chain}:
 *   get:
 *     summary: Retrieve wallet transaction history for Ethereum, Arbitrum, Base, and Solana
 *     description: >
 *       Get the transaction history for a specific wallet address on a given blockchain.
 *       Supported chains: eth (Ethereum), arbitrum (Arbitrum), base (Base), solana (Solana)
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: >
 *           The wallet address to fetch transactions for. Examples:
 *           Ethereum: 0x28C6c06298d514Db089934071355E5743bf21d60,
 *           Base: 0x4200000000000000000000000000000000000006,
 *           Arbitrum: 0x489ee077994B6658eAfA855C308275EAd8097C4A
 *       - in: path
 *         name: chain
 *         required: true
 *         schema:
 *           type: string
 *           enum: [eth, arbitrum, base]
 *         description: >
 *           The blockchain to query (eth for Ethereum, arbitrum for Arbitrum, base for Base).
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       hash:
 *                         type: string
 *                         description: Transaction hash
 *                       from:
 *                         type: string
 *                         description: Sender's address
 *                       to:
 *                         type: string
 *                         description: Recipient's address
 *                       value:
 *                         type: string
 *                         description: Transaction value in native currency
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         description: Transaction timestamp
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

// Import required modules
const Moralis = require("moralis");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const solanaweb3 = require("@solana/web3.js");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

require("dotenv").config();

const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
    info: {
      title: "Transaction history API for Shogun Telegram Bot",
      version: "1.0.0",
      description:
        "API for retrieving wallet transaction history across multiple blockchains",
    },
  },
  apis: ["./server.js"], // Path to the API docs
};

const spacs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spacs));

// Define the server port
const PORT = process.env.PORT || 3000;

const SUPPORTED_CHAINS = {
  eth: { name: "Ethereum", chainId: 1 },
  arbitrum: { name: "Arbitrum", chainId: 42161 },
  base: { name: "Base", chainId: 8453 },
  solana: { name: "Solana", chainId: 101 },
};

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
/**
 * @swagger
 * /api/sol-wallet-history/{address}:
 *   get:
 *     summary: Retrieve Solana wallet transaction history
 *     description: >
 *       Get the transaction history for a specific wallet address on the Solana blockchain.
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: >
 *           The Solana wallet address to fetch transactions for.
 *           Example: 5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       hash:
 *                         type: string
 *                         description: Transaction hash
 *                       from:
 *                         type: string
 *                         description: Sender's address
 *                       to:
 *                         type: string
 *                         description: Recipient's address
 *                       value:
 *                         type: string
 *                         description: Transaction value in native currency
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                         description: Transaction timestamp
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
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
