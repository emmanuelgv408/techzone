const express = require('express')
const router = express.Router();
const cors = require('cors')
const { handleStripeWebhook, getPastOrders} = require('../controllers/webhookController')





router.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook )
router.get("/past-orders/:userId", getPastOrders);  


module.exports = router;
