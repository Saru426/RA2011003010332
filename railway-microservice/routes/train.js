// routes/trains.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get train schedules route
router.get('/', async (req, res) => {
  try {
    // Fetch train schedules from the John Doe Railway Server
    const response = await axios.get(`${JOHN_DOE_API_URL}/trains`);

    // Process the response and sort as per your requirements
    // ...

    // Return the sorted train schedules to the user
    res.status(200).json(sortedTrainSchedules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train schedules' });
  }
});

router.get('/:trainNumber', async (req, res) => {
    try {
      const trainNumber = req.params.trainNumber;
  
      // Fetch details of the specified train from the John Doe Railway Server
      const response = await axios.get(`${JOHN_DOE_API_URL}/trains/${trainNumber}`);
  
      // Process the response and return the train details to the user
      res.status(200).json(trainDetails);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch train details' });
    }
  });
  
  module.exports = router;
  
