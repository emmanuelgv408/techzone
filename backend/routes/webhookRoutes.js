const express = require('express')
const router = express.Router();
const cors = require('cors')
const { handleStripeWebhook, getPastOrders} = require('../controllers/webhookController')


router.use(
   cors({
    credentials: true,
    origin: 'http://localhost:5173'
   })
)


router.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook )
router.get("/past-orders/:userId", getPastOrders);  


module.exports = router;
