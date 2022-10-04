const express = require('express');
const crypto = require('crypto');
const { validateEmail, validatePassword } = require('../middlewares/validation');

const router = express.Router();

const generateToken = () => crypto.randomBytes(8).toString('hex');

router.post('/login', validateEmail, validatePassword, (request, response) => {
  const token = generateToken();
  response.status(200).json({ token });
});

module.exports = router;