const express = require('express')
const router = express.Router();
const cors = require('cors')
const { registerUser, loginUser, getProfile, logoutUser, authenticateUser } = require('../controllers/authController')





router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/profile', authenticateUser ,getProfile)


module.exports = router;