const fetch = require("node-fetch");

/**
 * @swagger
 * /api/jettons/balances/{address}:
 *   get:
 *     summary: Get Jettons balances
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         description: The address to retrieve Jettons balances for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with Jettons balances.
 *       400:
 *         description: Bad request if address is missing or invalid.
 *       500:
 *         description: Internal server error.
 */
exports.getJettonsBalances = async (req, res) => {
  try {
    const { address } = req.params;
    if (!address) {
      return res.status(400).json({ error: "Address is a required parameter" });
    }
    const isValidAddress = /^[0-9a-zA-Z]+$/;
    if (!isValidAddress.test(address)) {
      return res.status(400).json({ error: "Invalid address format" });
    }

    const response = await fetch(
      `https://tonapi.io/v2/accounts/${address}/jettons?currencies=ton,usd`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-Key": process.env.TONAPI_API_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch Jettons balances" });
  }
};