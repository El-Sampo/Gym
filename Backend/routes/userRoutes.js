const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, age, gender, height, weight, activityLevel, goal } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      passwordHash,
      age,
      gender,
      height,
      weight,
      activityLevel,
      goal,
    });

    const token = generateToken(user._id);

    res.json({
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  res.json(req.user);
});

router.put("/me", authMiddleware, async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      height,
      weight,
      activityLevel,
      goal,
      caloriesTarget,
      waterTarget,
      waterIntake,
      proteinTarget,
      carbsTarget,
      fatsTarget,
    } = req.body;

    if (name !== undefined) req.user.name = name;
    if (age !== undefined) req.user.age = age;
    if (gender !== undefined) req.user.gender = gender;
    if (height !== undefined) req.user.height = height;
    if (weight !== undefined) req.user.weight = weight;
    if (activityLevel !== undefined) req.user.activityLevel = activityLevel;
    if (goal !== undefined) req.user.goal = goal;
    if (caloriesTarget !== undefined) req.user.caloriesTarget = caloriesTarget;
    if (waterTarget !== undefined) req.user.waterTarget = waterTarget;
    if (waterIntake !== undefined) req.user.waterIntake = waterIntake;
    if (proteinTarget !== undefined) req.user.proteinTarget = proteinTarget;
    if (carbsTarget !== undefined) req.user.carbsTarget = carbsTarget;
    if (fatsTarget !== undefined) req.user.fatsTarget = fatsTarget;

    await req.user.save();

    res.json(req.user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
