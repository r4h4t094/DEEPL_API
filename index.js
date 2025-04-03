const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({
    code: 200,
    message: "Welcome to DeepL Free API. POST to /api/translate."
  });
});

// Import translate endpoint
const translateHandler = require('./api/translate');
app.post('/api/translate', translateHandler);

// Export for Vercel (serverless function compatibility)
module.exports = app;
