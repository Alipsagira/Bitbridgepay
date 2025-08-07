index.js


const express = require('express');
const cors = require('cors');
const { v4: uuidv4} = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const payments = {};

app.post('/api/create-payment', (req, res) => {
  const { amount} = req.body;
  const id = uuidv4();
  const link = `http://localhost:5173/pay/${id}?amount=${amount}`;
  payments[id] = { amount, status: 'pending'};
  res.json({ link});
});

app.get('/api/payment-status/:id', (req, res) => {
  const { id} = req.params;
  const payment = payments[id];
  if (!payment) return res.status(404).json({ error: 'Not found'});
  res.json(payment);
});

app.listen(3000, () => console.log('Backend running on port 3000'));


