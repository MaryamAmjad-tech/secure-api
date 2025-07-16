require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Rate Limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5
});

// Middleware
app.use(helmet());
app.use(cors({ origin: 'http://localhost' }));
app.use(limiter);

// API Key Middleware
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }
  next();
});

// Route
app.get('/api/secure', (req, res) => {
  res.json({ message: 'This is a secure API response.' });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

