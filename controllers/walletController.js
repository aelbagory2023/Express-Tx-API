const fetch = require("node-fetch");

/**
 * @swagger
 * /api/wallet/history/{address}:
 *   get:
 *     summary: Get wallet history
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         description: The wallet address to retrieve history for.
 *         schema:
 *           type: string
 *       - in: query
 *         name: chain
 *         required: false
 *         description: The blockchain to filter the history by.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with wallet history.
 *       400:
 *         description: Bad request if address is missing.
 *       500:
 *         description: Internal server error.
 */
exports.getWalletHistory = async (req, res) => {
  try {
    const { address } = req.params; // Keep only address in params
    const chain = req.query.chain; // Get chain from query parameters
    if (!address) {
      return res.status(400).json({ error: "Address is a required parameter" });
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": process.env.MORALIS_API_KEY, // Use environment variable
      },
    };
    if (!chain) {
      return res.status(400).json({ error: "Chain is a required parameter" });
    }

    // Construct the URL with the chain parameter
    let url = `https://deep-index.moralis.io/api/v2.2/wallets/${address}/history?order=DESC&chain=${chain}`;

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json(); // Log the error response
      console.error(`Error fetching wallet history: ${errorData}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error in getWalletHistory:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};

/**
 * @swagger
 * /api/wallet/solana/history/{address}:
 *   get:
 *     summary: Get Solana wallet history
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         description: The Solana wallet address to retrieve history for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with Solana wallet history.
 *       400:
 *         description: Bad request if address is missing or invalid.
 *       500:
 *         description: Internal server error.
 */
exports.getSolanaWalletHistory = async (req, res) => {
  try {
    const { address } = req.params;
    if (!address) {
      return res.status(400).json({ error: "Address is a required parameter" });
    }
    const isValidSolanaAddress = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
    if (!isValidSolanaAddress) {
      return res.status(400).json({ error: "Invalid Solana address format" });
    }

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", process.env.SHYFT_API_KEY);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const url = `https://api.shyft.to/sol/v1/transaction/history?network=mainnet-beta&tx_num=2&account=${address}&enable_raw=true`;

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorData = await response.json(); // Log the error response
      console.error(`Error fetching Solana wallet history: ${errorData}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error in getSolanaWalletHistory:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
