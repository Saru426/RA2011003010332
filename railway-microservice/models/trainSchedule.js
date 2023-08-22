const mongoose = require('mongoose');

const trainScheduleSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true },
  trainName: { type: String, required: true },
  departureTime: { type: Date, required: true },
  seatsAvailable: {
    sleeper: { type: Number, default: 0 },
    AC: { type: Number, default: 0 },
  },
  price: {
    sleeper: { type: Number, default: 0 },
    AC: { type: Number, default: 0 },
  },
  delayedBy: { type: Number, default: 0 },
});

module.exports = mongoose.model('TrainSchedule', trainScheduleSchema);
