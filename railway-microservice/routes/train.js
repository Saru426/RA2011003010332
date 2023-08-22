const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${JOHN_DOE_API_URL}/trains`);

    res.status(200).json(sortedTrainSchedules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train schedules' });
  }
});

router.get('/:trainNumber', async (req, res) => {
    try {
      const trainNumber = req.params.trainNumber;
  
      const response = await axios.get(`${JOHN_DOE_API_URL}/trains/${trainNumber}`);
  
      res.status(200).json(trainDetails);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch train details' });
    }
  });
  
  module.exports = router;
  
