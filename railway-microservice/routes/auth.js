const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/authenticate', async (req, res) => {
  try {
    const { companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret } = req.body;

    const response = await axios.post(`${JOHN_DOE_API_URL}/authenticate`, {
      companyName,
      clientID,
      ownerName,
      ownerEmail,
      rollNo,
      clientSecret,
    });

    const { token_type, access_token, expires_in } = response.data;

    res.status(200).json({ token_type, access_token, expires_in });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

module.exports = router;
