const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(`Error code: ${e}`));

const app = express();

// Middleware to parse incoming requests
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// List of allowed origins
const allowedOrigins = [
  "https://techzone-eight.vercel.app",
  "https://techzone-git-main-emmanuels-projects-4cf8021e.vercel.app"
];

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {  // Allow requests with no origin (like Postman)
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use((req, res, next) => {
  console.log("Incoming Request:", req.method, req.url);
  console.log("Headers:", req.headers);
  next();
});

app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/webhookRoutes")); 

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
