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

// Define Swagger options for API documentation
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    servers: [
      {
        url: "http://localhost:3000/", // Define the server URL
      },
    ],
    info: {
      title: "Transaction history API for Shogun Telegram Bot", // Set the API title
      version: "1.0.0", // Set the API version
      description:
        "API for retrieving wallet transaction history across multiple blockchains", // Provide a description of the API
    },
  },
  apis: ["./server.js"], // Specify the file(s) containing the API routes
};

// Generate Swagger specification
const spacs = swaggerJsdoc(swaggerOptions);

// Set up Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spacs));

// Define the server port, use environment variable if available, otherwise use 3000
const PORT = process.env.PORT || 3000;

// Define supported blockchain networks and their details
const SUPPORTED_CHAINS = {
  eth: { name: "Ethereum", chainId: 1 },
  arbitrum: { name: "Arbitrum", chainId: 42161 },
  base: { name: "Base", chainId: 8453 },
  solana: { name: "Solana", chainId: 101 },
};

// Define options for API requests
const options = {
  method: "GET", // Set the HTTP method to GET
  headers: {
    accept: "application/json", // Set the accepted response type to JSON
    "X-API-Key":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwNTljNWUyLTg5ZDMtNDBmNi04MzRkLWQ1NGY2MmU3M2RiMyIsIm9yZ0lkIjoiNDA4NjUxIiwidXNlcklkIjoiNDE5OTE2IiwidHlwZUlkIjoiZTIyNzk0ZmQtZWYxNy00YjMyLWE5MDItY2E3ZjUzZWNiZGQyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY1OTk1NDYsImV4cCI6NDg4MjM1OTU0Nn0.wFIhNrG2SDOfWl2hawVg0qvxLmekMdvzXJ00o3Nq1iw", // Set the API key for authentication
  },
};

/**
 * @swagger
 * /api/ton-rates:
 *   get:
 *     summary: Retrieve TON rates for specified tokens and currencies
 *     description: Fetches the current exchange rates for TON tokens against specified currencies
 *     parameters:
 *       - in: query
 *         name: tokens
 *         description: Comma-separated list of TON token symbols
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: currencies
 *         description: Comma-separated list of currency codes
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: TON rates for the specified tokens and currencies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       token:
 *                         type: string
 *                       currency:
 *                         type: string
 *                       rate:
 *                         type: number
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
app.get("/api/ton-rates", async (req, res) => {
  try {
    const { tokens, currencies } = req.query;
    if (!tokens || !currencies) {
      return res
        .status(400)
        .json({ error: "Tokens and currencies are required parameters" });
    }
    const response = await fetch(
      `https://tonapi.io/v2/rates?tokens=${tokens}&currencies=${currencies}`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch TON rates" });
  }
});

/**
 * @swagger
 * /api/jettons-balances/{address}:
 *   get:
 *     summary: Get all Jettons balances by owner address
 *     description: Fetches the balances of all Jettons owned by a specific address
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: The address to fetch Jettons balances for
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balances:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       jetton:
 *                         type: string
 *                         description: Jetton symbol
 *                       balance:
 *                         type: number
 *                         description: Balance of the Jetton
 *                       currency:
 *                         type: string
 *                         description: Currency of the balance
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
app.get("/api/jettons-balances/:address", async (req, res) => {
  try {
    const { address } = req.params; // Extract address from request parameters

    // Validate input: Check if address is provided and in correct format
    if (!address) {
      return res.status(400).json({ error: "Address is a required parameter" }); // Return error if address is missing
    }

    // Validate address format using a regular expression
    const isValidAddress = /^[0-9a-zA-Z]+$/; // Simplified validation for demonstration
    // Check if the address is valid
    if (!isValidAddress.test(address)) {
      // If the address is not valid, return a 400 Bad Request response with an error message
      return res.status(400).json({ error: "Invalid address format" });
    }

    const response = await fetch(
      `https://tonapi.io/v2/accounts/${address}/jettons?currencies=ton,usd`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Throw error if API response is not OK
    }

    const data = await response.json(); // Parse API response as JSON

    res.json(data); // Send the parsed data as JSON response to the client
  } catch (error) {
    console.error(error); // Log any errors that occur
    res.status(500).json({ error: "Failed to fetch Jettons balances" }); // Send error response to client
  }
});

// Define a route to handle wallet history requests
app.get("/api/wallet-history/:address/:chain", async (req, res) => {
  try {
    const { address, chain } = req.params; // Extract address and chain from request parameters

    // Validate inputs
    if (!address || !chain) {
      return res
        .status(400)
        .json({ error: "Address and chain are required parameters" }); // Return error if address or chain is missing
    }

    // Validate chain
    if (!SUPPORTED_CHAINS[chain]) {
      return res.status(400).json({
        error:
          "Invalid chain. Supported chains are: " +
          Object.keys(SUPPORTED_CHAINS).join(", "), // Return error if chain is not supported
      });
    }

    // Validate address format (basic check, can be improved for each chain)
    const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Regular expression for Ethereum-like addresses
    if (!addressRegex.test(address)) {
      return res.status(400).json({ error: "Invalid address format" }); // Return error if address format is invalid
    }

    const now = Math.floor(Date.now() / 1000); // Get current Unix timestamp
    const yesterday = now - 24 * 60 * 60; // Calculate Unix timestamp for 24 hours ago
    console.log(
      `Retrieving wallet history for address: ${address} on the ${SUPPORTED_CHAINS[chain].name} network` // Log the retrieval attempt
    );
    const to_date = now; // Set end date for transaction history
    const from_date = yesterday; // Set start date for transaction history

    const response = await fetch(
      `https://deep-index.moralis.io/api/v2.2/wallets/${address}/history?chain=${chain}&order=DESC&from_date=${from_date}&to_date=${to_date}`,
      options // Make API request to Moralis for wallet history
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Throw error if API response is not OK
    }

    const data = await response.json(); // Parse API response as JSON

    res.json(data); // Send the parsed data as JSON response to the client
  } catch (error) {
    console.error(error); // Log any errors that occur
    res.status(500).json({ error: "An error occurred while fetching data" }); // Send error response to client
  }
});

// Print success message to console

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
    const { address } = req.params; // Extract address from request parameters

    // Validate input: Check if address is provided and in correct format
    if (!address) {
      return res.status(400).json({ error: "Address is a required parameter" }); // Return error if address is missing
    }

    // Validate Solana address format using a regular expression
    const isValidSolanaAddress = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
    // Check if the address is valid
    if (!isValidSolanaAddress) {
      // If the address is not valid, return a 400 Bad Request response with an error message
      return res.status(400).json({ error: "Invalid Solana address format" });
    }

    const myHeaders = new Headers(); // Create new headers object
    myHeaders.append("x-api-key", "ab9adsP2ivQCujdx"); // Add API key to headers

    const requestOptions = {
      method: "GET", // Set request method to GET
      headers: myHeaders, // Set headers for the request
      redirect: "follow", // Set redirect behavior
    };

    const response = await fetch(
      `https://api.shyft.to/sol/v1/transaction/history?network=mainnet-beta&tx_num=100&account=${address}&enable_raw=true`,
      requestOptions // Make API request to Shyft for Solana transaction history
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Throw error if API response is not OK
    }

    console.log(
      `Retrieving wallet history for address: ${address} on the Solana network` // Log the retrieval attempt
    );
    const data = await response.json(); // Parse API response as JSON
    console.log(data); // Log the response data to the console
    res.json(data); // Send the parsed data as JSON response to the client
  } catch (error) {
    console.error("error", error); // Log any errors that occur
    res.status(500).json({ error: "An error occurred while fetching data" }); // Send error response to client
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // Start the server and log the port it's listening on
