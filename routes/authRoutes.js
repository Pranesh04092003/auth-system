const express = require('express');
const { register, login } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticate, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
