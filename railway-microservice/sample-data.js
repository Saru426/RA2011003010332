const mongoose = require('mongoose');
const TrainSchedule = require('./models/TrainSchedule');
const TrainDetail = require('./models/TrainDetail');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  const trainSchedule1 = new TrainSchedule({
    trainNumber: 'Chennai Exp',
    trainName: '2344',
    departureTime: { Hours: 21, Minutes: 35, Seconds:0 },
    seatsAvailable: { sleeper: 3, AC: 1 },
    price: { sleeper: 2, AC: 5 },
    delayedBy: 15,
  });

  const trainSchedule2 = new TrainSchedule({
    trainNumber: 'Hyderabad Exp',
    trainName: '2341',
    departureTime: { Hours: 23, Minutes: 55, Seconds:0 },
    seatsAvailable: { sleeper: 6, AC: 7 },
    price: { sleeper: 554, AC: 1854 },
    delayedBy: 5,
  });

  const trainSchedule3 = new TrainSchedule({
    trainNumber: 'Delhi Door Hai Exp',
    trainName: '2343',
    departureTime: { Hours: 9, Minutes: 45, Seconds:0 },
    seatsAvailable: { sleeper: 32, AC: 1 },
    price: { sleeper: 1, AC: 723 },
    delayedBy: 3,
  });

  await trainSchedule1.save();
  await trainSchedule2.save();
  await trainSchedule3.save();

  const trainDetail1 = new TrainDetail({
    trainNumber: 'Chennai Exp',
    trainName: '2344',
  });

  const trainDetail2 = new TrainDetail({
    trainNumber: 'Hyderabad Exp',
    trainName: '2341',
  });

  const trainDetail3 = new TrainDetail({
    trainNumber: 'Delhi Door Hai Exp',
    trainName: '2343',
  });

  await trainDetail1.save();
  await trainDetail2.save();

  console.log('Sample data added to the database');
  db.close();
});
