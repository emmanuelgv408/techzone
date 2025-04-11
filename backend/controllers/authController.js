const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");


const test = (req, res) => {
  res.json("test is working");
};
const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden: Invalid token" });
    }

    req.user = user; 
    next(); 
  });
};

const registerUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: "Email already taken" });
    }
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "Registration successful", user });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No user found with this email" });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    jwt.sign(
      { email: user.email, id: user._id, name: user.name, lastName: user.lastName },
      process.env.JWT_SECRET,
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Token generation failed" });
        }

        
        res
          .cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
          })
          .json({ message: "Login successful", user });
      }
    );

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Logged out successfully" });
};

const getProfile = (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
      res.json(user); 
      console.log("Profile route hit. Cookies:", req.cookies);

    });
  } else {
    res.status(401).json({ error: 'No token provided' }); 
  }
};



module.exports = {
  test,
  authenticateUser,
  registerUser,
  loginUser,
  getProfile,
  logoutUser
};
