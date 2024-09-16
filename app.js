const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// Existing root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// New route for transaction lookup interface
app.get("/lookup", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Transaction Lookup</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            input, button { margin: 10px 0; padding: 5px; }
            #result { white-space: pre-wrap; background-color: #f0f0f0; padding: 10px; }
        </style>
    </head>
    <body>
        <h1>Transaction Lookup</h1>
        <input type="text" id="address" placeholder="Enter address">
        <input type="text" id="chainId" placeholder="Enter chain ID">
        <button onclick="getTransactions()">Get Transactions</button>
        <div id="result"></div>

        <script>
            async function getTransactions() {
                const address = document.getElementById('address').value;
                const chainId = document.getElementById('chainId').value;
                const resultDiv = document.getElementById('result');

                if (!address || !chainId) {
                    resultDiv.textContent = 'Please enter both address and chain ID.';
                    return;
                }

                try {
                    const response = await fetch(\`/transactions/\${address}/\${chainId}\`);
                    const data = await response.json();
                    resultDiv.textContent = JSON.stringify(data, null, 2);
                } catch (error) {
                    resultDiv.textContent = \`Error: \${error.message}\`;
                }
            }
        </script>
    </body>
    </html>
  `);
});

app.use("/api/users", usersRouter);

// Endpoint to get transactions
app.get("/transactions/:address/:chainId", async (req, res) => {
  const { address, chainId } = req.params;
  
  try {
    // Replace with your actual Covalent API key
    const apiKey = "cqt_rQWWXyCwGmQJvBf7XfJMXJhCfjF9";
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?key=${apiKey}&page-size=10&page-number=0`;

    console.log(`Fetching transactions from: ${url}`);

    const response = await axios.get(url);

    console.log('Covalent API response received:', response.status);

    if (response.data && response.data.data && response.data.data.items) {
      // Fetch current price of the native currency (e.g., ETH)
      const priceUrl = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;
      const priceResponse = await axios.get(priceUrl);
      const ethPrice = priceResponse.data.ethereum.usd;

      console.log(`Current ETH price: $${ethPrice}`);

      const transactions = response.data.data.items
        .slice(0, 10) // Ensure we only take the first 10 items
        .map(tx => {
          const valueInEth = parseFloat(tx.value) / 1e18;
          const valueInUsd = valueInEth * ethPrice;
          return {
            txHash: tx.tx_hash,
            from: tx.from_address,
            to: tx.to_address,
            valueEth: valueInEth.toFixed(18), // Show full precision
            valueUsd: valueInUsd.toFixed(2), // Show USD value with 2 decimal places
            gasSpentEth: (parseFloat(tx.gas_spent) / 1e18).toFixed(18),
            gasSpentUsd: ((parseFloat(tx.gas_spent) / 1e18) * ethPrice).toFixed(2),
            gasPrice: (parseFloat(tx.gas_price) / 1e9).toFixed(9), // Gwei
            blockSignedAt: tx.block_signed_at
          };
        });

      console.log(`Processed ${transactions.length} transactions`);
      res.json(transactions);
    } else {
      console.log('No data returned from Covalent API');
      res.status(400).json({ error: "No data returned from Covalent API" });
    }
  } catch (error) {
    console.error("Error fetching transactions:");
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    res.status(500).json({ 
      error: "Failed to fetch transactions", 
      details: error.response ? error.response.data : error.message 
    });
  }
});

const supportedNetworks = [
  { name: "Ethereum Mainnet", chainId: "1" },
  { name: "Arbitrum One", chainId: "42161" },
  { name: "Base Mainnet", chainId: "8453" }
  // Add other networks as needed
];

// Endpoint to get supported networks
app.get("/supported-networks", (req, res) => {
  res.json(supportedNetworks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
