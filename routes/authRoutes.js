const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: 'User created' });
  });

module.exports = router;
