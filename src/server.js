// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Set Mongoose strictQuery option
mongoose.set('strictQuery', true); // or false, depending on your preference

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/WhatABook', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes (add your routes here)
app.get('/', (req, res) => {
    res.send('Welcome to WhatABook API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
