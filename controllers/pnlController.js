const fetch = require("node-fetch");

/**
 * @swagger
 * /api/pnl/address:
 *   get:
 *     summary: Get address PNL
 *     parameters:
 *       - in: query
 *         name: address
 *         required: true
 *         description: The address to retrieve PNL for.
 *         schema:
 *           type: string
 *       - in: query
 *         name: start_date
 *         required: true
 *         description: The start date for PNL calculation.
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: end_date
 *         required: true
 *         description: The end date for PNL calculation.
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Successful response with address PNL.
 *       400:
 *         description: Bad request if parameters are missing or invalid.
 *       500:
 *         description: Internal server error.
 */
exports.getAddressPnl = async (req, res) => {
  try {
    const { address, start_date, end_date } = req.query;
    if (!address || !start_date || !end_date) {
      return res
        .status(400)
        .json({
          error: "Address, start_date, and end_date are required parameters",
        });
    }
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res
        .status(400)
        .json({ error: "Invalid date format for start_date or end_date" });
    }
    const url = `https://api.nansen.ai/v1/address/pnl?address=${address}&start_date=${
      startDate.toISOString().split("T")[0]
    }&end_date=${endDate.toISOString().split("T")[0]}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch address PNL" });
  }
};

/**
 * @swagger
 * /api/token/pnl/{wallet}:
 *   get:
 *     summary: Get token PNL
 *     parameters:
 *       - in: path
 *         name: wallet
 *         required: true
 *         description: The wallet address to retrieve token PNL for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with token PNL.
 *       400:
 *         description: Bad request if wallet is missing.
 *       500:
 *         description: Internal server error.
 */
exports.getTokenPnl = async (req, res) => {
  const { wallet } = req.params;
  if (!wallet) {
    return res
      .status(400)
      .json({ error: "Wallet address is a required parameter" });
  }
  const url = `https://feed-api.cielo.finance/api/v1/${wallet}/pnl/tokens`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": process.env.CIELO_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch token PNL" });
  }
};
