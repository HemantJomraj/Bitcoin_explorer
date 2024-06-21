const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Client } = require('pg');

const app = express();
const port = 3000;

app.use(cors());

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  user: 'postgres',
  database: 'bitcoin_explorer',
  port: 5430,
});

client.connect();

app.get('/api/block-height', async (req, res) => {
  try {
    const result = await client.query('SELECT block_height FROM block_data ORDER BY block_height DESC LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/market-price', async (req, res) => {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const marketPrice = response.data.bpi.USD.rate_float;
    res.json({ market_price: marketPrice });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/transaction-count', async (req, res) => {
  try {
    const result = await client.query('SELECT transaction_count FROM transaction_data ORDER BY created_at DESC LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/hash-rate', async (req, res) => {
  try {
    const result = await client.query('SELECT hash_rate FROM hash_rate_data ORDER BY created_at DESC LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});