const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const generateToken = () => crypto.randomBytes(8).toString('hex');

router.post('/login', (request, response) => {
  const token = generateToken();
  response.status(200).json({ token });
});

module.exports = router;