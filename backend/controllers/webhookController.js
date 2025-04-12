const Stripe = require('stripe'); 
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/order'); 
require('dotenv').config();

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; 

exports.handleStripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  const rawBody = req.body; 


  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  console.log(`Webhook event received: ${event.type}`);

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      const userId = session.client_reference_id;
      console.log('Stripe ID:' ,userId);
      console.log(session.line_items);

      const order = new Order({
        userId: userId,
        items: session.line_items, 
        totalAmount: session.amount_total / 100, 
        status: 'completed',
      });

      try {
        await order.save();
        console.log(`Order for user ${userId} created successfully`);
      } catch (error) {
        console.error('Error saving order:', error);
        return res.status(500).send('Error saving order');
      }

      return res.status(200).send('Webhook processed successfully');

    default:
      console.log(`Unhandled event type: ${event.type}`);
      return res.status(200).send('Event received');
  }
};

exports.getPastOrders = async (req, res) => {
    const { userId } = req.params;  
  
    try {

      const orders = await Order.find({ userId: userId }).sort({ createdAt: -1 });
  
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found for this user." });
      }
  
      return res.status(200).json(orders);  
    } catch (error) {
      console.error("Error fetching past orders:", error);
      return res.status(500).json({ message: "Error fetching orders." });
    }
  };
//done