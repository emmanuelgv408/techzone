const express = require("express");
const cors = require("cors");  
const { createCheckoutSession } = require("../controllers/paymentController");

const router = express.Router();

router.use(cors());  

router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
