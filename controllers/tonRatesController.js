const fetch = require("node-fetch");

/**
 * @swagger
 * /api/ton/rates:
 *   get:
 *     summary: Get TON rates
 *     parameters:
 *       - in: query
 *         name: tokens
 *         required: true
 *         description: The tokens to retrieve rates for.
 *         schema:
 *           type: string
 *       - in: query
 *         name: currencies
 *         required: true
 *         description: The currencies to convert the rates to.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with TON rates.
 *       400:
 *         description: Bad request if tokens or currencies are missing.
 *       500:
 *         description: Internal server error.
 */
exports.getTonRates = async (req, res) => {
  try {
    const { tokens, currencies } = req.query;
    if (!tokens || !currencies) {
      return res
        .status(400)
        .json({ error: "Tokens and currencies are required parameters" });
    }
    // Check if the API endpoint is correct
    const response = await fetch(
      `https://tonapi.io/v2/rates?tokens=${tokens}&currencies=${currencies}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    // If the error is a 404, provide a more specific error message
    if (error.message.includes("404")) {
      res
        .status(404)
        .json({
          error:
            "Resource not found. Please check the API endpoint and parameters.",
        });
    } else {
      res.status(500).json({ error: "Failed to fetch TON rates" });
    }
  }
};
