const fetch = require("node-fetch");

/**
 * @swagger
 * /api/lendborrow/userpositions:
 *   get:
 *     summary: Get user lending and borrowing positions
 *     parameters:
 *       - in: query
 *         name: address
 *         required: true
 *         description: The address to retrieve user positions for.
 *         schema:
 *           type: string
 *       - in: query
 *         name: lendBorrowId
 *         required: true
 *         description: The lending/borrowing ID.
 *         schema:
 *           type: string
 *       - in: query
 *         name: rpc
 *         required: false
 *         description: Optional RPC parameter.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with user positions.
 *       400:
 *         description: Bad request if address or lendBorrowId is missing.
 *       500:
 *         description: Internal server error.
 */
exports.getUserPositions = async (req, res) => {
  try {
    const { address, lendBorrowId, rpc } = req.query;
    if (!address || !lendBorrowId) {
      return res
        .status(400)
        .json({ error: "Address and lendBorrowId are required parameters" });
    }

    // Construct the URL with optional rpc parameter
    const url = `https://api.expand.network/lendborrow/getuserpositions?address=${address}&lendborrowId=${lendBorrowId}${
      rpc ? `&rpc=${rpc}` : ""
    }`;

    const response = await fetch(url, {
      method: "GET",
      headers: { accept: "application/json" }, // Optional: Include headers if needed
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch user lending and borrowing positions" });
  }
};
