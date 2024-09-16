const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.use('/api/users', usersRouter);

// Endpoint to get transactions
app.get('/transactions/:address/:chainId', async (req, res) => {
  const { address, chainId } = req.params;
  
  try {
    // This is a placeholder URL. Replace with actual blockchain explorer API
    const apiUrl = `https://api.example.com/${chainId}/address/${address}/transactions`;
    
    const response = await axios.get(apiUrl);
    
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});