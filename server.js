// server.js
const express = require('express');
const app = express();
const PORT = 3000;

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

// Import translate endpoint (FIXED PATH)
const translateHandler = require('./api/translate');
app.post('/api/translate', translateHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});