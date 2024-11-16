const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Public Routes
router.post('/signup', signup);
router.post('/login', login);

// Protected Route Example
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
});

module.exports = router;
