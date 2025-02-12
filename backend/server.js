const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser')

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((e) => console.log(`Error code: ${e}`));

const app = express();


app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true,               
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))


app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/webhookRoutes'));



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
