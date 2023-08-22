const mongoose = require('mongoose');

const trainDetailSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('TrainDetail', trainDetailSchema);
