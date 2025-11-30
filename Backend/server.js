// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const userRoutes = require("./routes/userRoutes");

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("DB Error:", err));

// app.use("/api/user", userRoutes);

// app.listen(process.env.PORT, () =>
//   console.log("Server running on port", process.env.PORT)
// );

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

// Load environment variables from backend/.env
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || '';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

console.log('🔍 Checking environment variables...');
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('MONGODB_URI starts with:', process.env.MONGODB_URI?.substring(0, 20));
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);

if (!MONGODB_URI || MONGODB_URI === '') {
  console.log('❌ ERROR: MONGODB_URI is not set in .env file');
  console.log('📁 Looking for .env file in:', __dirname);
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));
// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Register Route
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must be at least 6 characters' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'User already exists with this email' 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '7d' }
    );

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration' 
    });
  }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide email and password' 
      });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'No token provided' 
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid token' 
    });
  }
};

// Get User Profile (Protected Route)
app.get('/api/auth/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// backend/server.js - ADD THESE ROUTES TO YOUR EXISTING SERVER.JS

// Weight Entry Schema (add this after User schema)
const weightEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create index for efficient queries
weightEntrySchema.index({ userId: 1, date: -1 });

const WeightEntry = mongoose.model('WeightEntry', weightEntrySchema);

// ============ WEIGHT LOGGING ROUTES ============

// Get all weight entries for authenticated user
app.get('/api/weight-entries', verifyToken, async (req, res) => {
  try {
    const entries = await WeightEntry.find({ userId: req.userId })
      .sort({ date: -1 })
      .limit(100); // Limit to last 100 entries

    res.json({
      success: true,
      entries: entries.map(entry => ({
        id: entry._id,
        weight: entry.weight,
        date: entry.date
      }))
    });
  } catch (error) {
    console.error('Get weight entries error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Add new weight entry
app.post('/api/weight-entries', verifyToken, async (req, res) => {
  try {
    const { weight, date } = req.body;

    // Validation
    if (!weight || !date) {
      return res.status(400).json({ 
        success: false, 
        message: 'Weight and date are required' 
      });
    }

    if (weight <= 0 || weight > 500) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid weight (1-500 kg)' 
      });
    }

    // Check if entry already exists for this date
    const existingEntry = await WeightEntry.findOne({
      userId: req.userId,
      date: new Date(date).setHours(0, 0, 0, 0)
    });

    if (existingEntry) {
      // Update existing entry
      existingEntry.weight = weight;
      await existingEntry.save();

      return res.json({
        success: true,
        message: 'Weight entry updated',
        entry: {
          id: existingEntry._id,
          weight: existingEntry.weight,
          date: existingEntry.date
        }
      });
    }

    // Create new entry
    const weightEntry = new WeightEntry({
      userId: req.userId,
      weight: Number(weight),
      date: new Date(date)
    });

    await weightEntry.save();

    res.status(201).json({
      success: true,
      message: 'Weight entry saved',
      entry: {
        id: weightEntry._id,
        weight: weightEntry.weight,
        date: weightEntry.date
      }
    });

  } catch (error) {
    console.error('Save weight entry error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Delete weight entry
app.delete('/api/weight-entries/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await WeightEntry.findOne({
      _id: id,
      userId: req.userId
    });

    if (!entry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Weight entry not found' 
      });
    }

    await WeightEntry.deleteOne({ _id: id });

    res.json({
      success: true,
      message: 'Weight entry deleted'
    });

  } catch (error) {
    console.error('Delete weight entry error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
