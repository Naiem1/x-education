const express = require('express');
const applyMiddleware = require('./middlewares');
// const routes = require('./routes');

// express app
const app = express();

// Middleware
applyMiddleware(app);

// Health check
app.get('/health', (_req, res) => {
  res.status(200).json({ health: 'OK', user: _req.user });
});


// app.use(routes)


// Global Error
app.use((err, _req, res, _next) => {
  
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});





module.exports = app;