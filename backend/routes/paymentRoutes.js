const express = require("express");
const cors = require("cors");  
const { createCheckoutSession } = require("../controllers/paymentController");
const {authenticateUser} = require("../controllers/authController")
const router = express.Router();



router.post("/create-checkout-session", authenticateUser, createCheckoutSession);

module.exports = router;
