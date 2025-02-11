const stripe = require("../config/stripeConfig");

exports.createCheckoutSession = async (req, res) => {
  const { products } = req.body;

  try {
  
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name, 
          images: [product.image], 
        },
        unit_amount: Math.round(product.price * 100), 
      },
      quantity: product.quantity,
    }));


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });


    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};
