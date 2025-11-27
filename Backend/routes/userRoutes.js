const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    let user = await User.findOne();

    if (!user) user = new User(req.body);
    else Object.assign(user, req.body);

    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});

module.exports = router;
