const mongoose = require('mongoose');

const trainScheduleSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true },
  trainName: { type: String, required: true },
  departureTime: {
    Hours: { type: Number, default: 0 },
    Minutes: { type: Number, default: 0 },
    Seconds: { type: Number, default: 0 }
  },
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
