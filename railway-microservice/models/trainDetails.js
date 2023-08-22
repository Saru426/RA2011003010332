// models/TrainDetail.js
const mongoose = require('mongoose');

const trainDetailSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true, unique: true },
  // Add more fields as needed for train details
});

module.exports = mongoose.model('TrainDetail', trainDetailSchema);
