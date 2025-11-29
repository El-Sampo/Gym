const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");


router.get("/me", authMiddleware, async (req, res) => {
  res.json(req.user);
});


router.post("/meal", authMiddleware, async (req, res) => {
  req.user.mealPlans.push(req.body);
  await req.user.save();
  res.json({ message: "Meal plan added", data: req.user.mealPlans });
});


router.post("/exercise", authMiddleware, async (req, res) => {
  req.user.exercises.push(req.body);
  await req.user.save();
  res.json({ message: "Exercise added", data: req.user.exercises });
});


router.post("/progress", authMiddleware, async (req, res) => {
  req.user.progress.push(req.body);
  await req.user.save();
  res.json({ message: "Progress added", data: req.user.progress });
});

module.exports = router;
