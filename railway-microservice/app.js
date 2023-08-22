const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();
const usersRouter = require('./routes/users');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JOHN_DOE_API_URL = process.env.JOHN_DOE_API_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const authRouter = require('./routes/auth');
const trainsRouter = require('./routes/trains');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/users', usersRouter);

app.use('/auth', authRouter);

app.use('/trains', trainsRouter);