const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/register', async (req, res) => {
    try {
      const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;
  
      // Make a POST request to John Doe Railway Server to register the company
      const response = await axios.post(`${JOHN_DOE_API_URL}/register`, {
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode,
      });
  
      const { clientID, clientSecret } = response.data;
  
      // Return clientID and clientSecret to the user
      res.status(201).json({ companyName, clientID, clientSecret });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  
  module.exports = router;
