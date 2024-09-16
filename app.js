const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to get transactions
app.get("/transactions/:address/:chainId", async (req, res) => {
  const { address, chainId } = req.params;
  
  try {
    const apiKey = "cqt_rQWWXyCwGmQJvBf7XfJMXJhCfjF9";
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?key=${apiKey}&page-size=10&page-number=0`;

    const response = await axios.get(url);

    if (response.data && response.data.data && response.data.data.items) {
      const priceUrl = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;
      const priceResponse = await axios.get(priceUrl);
      const ethPrice = priceResponse.data.ethereum.usd;

      const transactions = response.data.data.items
        .slice(0, 10)
        .map(tx => {
          const valueInEth = parseFloat(tx.value) / 1e18;
          const valueInUsd = valueInEth * ethPrice;
          const gasSpentEth = parseFloat(tx.gas_spent) / 1e18;
          const gasSpentUsd = gasSpentEth * ethPrice;
          return {
            txHash: tx.tx_hash,
            from: tx.from_address,
            to: tx.to_address,
            valueEth: valueInEth < 0.000001 ? "< 0.000001 ETH" : valueInEth.toFixed(6),
            valueUsd: valueInUsd < 0.01 ? "< $0.01" : `$${valueInUsd.toFixed(2)}`,
            gasSpentEth: gasSpentEth.toFixed(18).replace(/\.?0+$/, ""),
            gasSpentUsd: `$${gasSpentUsd.toFixed(18).replace(/\.?0+$/, "")}`,
            blockSignedAt: tx.block_signed_at
          };
        });

      res.json(transactions);
    } else {
      res.status(400).json({ error: "No data returned from Covalent API" });
    }
  } catch (error) {
    res.status(500).json({ 
      error: "Failed to fetch transactions", 
      details: error.response ? error.response.data : error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
