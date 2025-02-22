
const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: { type: String, required:true },
  items: [
    {
      productId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'completed' },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
