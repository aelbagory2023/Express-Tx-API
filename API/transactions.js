require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.get('/api/transactions/:address/:chainId', async (req, res) => {
  const { address, chainId } = req.params;
  
  try {
    const apiKey = process.env.COVALENT_API_KEY;
    if (!apiKey) {
      throw new Error('Covalent API key is not set');
    }

    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?key=${apiKey}&page-size=10&page-number=0`;

    console.log('Requesting URL:', url);

    const response = await axios.get(url);

    if (response.headers['content-type'].includes('text/html')) {
      throw new Error('Received HTML response instead of JSON. The Covalent API might be down or the request was invalid.');
    }

    if (response.data && response.data.data && response.data.data.items) {
      const priceUrl = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;
      const priceResponse = await axios.get(priceUrl);
      const ethPrice = priceResponse.data.ethereum.usd;

      const transactions = response.data.data.items
        .slice(0, 10)
        .map(tx => {
          const valueInEth = parseFloat(tx.value) / 1e18;
          const valueInUsd = valueInEth * ethPrice;
          const gasPrice = parseFloat(tx.gas_price) / 1e9; // Convert to Gwei
          const gasUsed = parseFloat(tx.gas_spent);
          const gasSpentEth = (gasPrice * gasUsed) / 1e9; // Convert Gwei to ETH
          const gasSpentUsd = gasSpentEth * ethPrice;
          return {
            txHash: tx.tx_hash,
            from: tx.from_address,
            to: tx.to_address,
            valueEth: valueInEth < 0.000001 ? "< 0.000001 ETH" : valueInEth.toFixed(6),
            valueUsd: valueInUsd < 0.01 ? "< $0.01" : `$${valueInUsd.toFixed(2)}`,
            gasSpentEth: gasSpentEth.toFixed(18).replace(/\.?0+$/, ""),
            gasSpentUsd: `$${gasSpentUsd.toFixed(2)}`,
            blockSignedAt: tx.block_signed_at
          };
        });

      res.json(transactions);
    } else {
      res.status(400).json({ error: "No data returned from Covalent API" });
    }
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ 
      error: "Failed to fetch transactions", 
      details: error.message,
      stack: error.stack
    });
  }
});

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// This is for local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
