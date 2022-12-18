const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using our routes
app.use(routes)

// Connecting our database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/week18', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Loggin mongo queries
mongoose.set('debug', true)

// Connecting to server
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));