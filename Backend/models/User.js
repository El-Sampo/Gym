const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    activityLevel: {
      type: String,
    },
    goal: {
      type: String,
    },

    caloriesTarget: {
      type: Number,
    },
    waterTarget: {
      type: Number,
    },
    waterIntake: {
      type: Number,
      default: 0,
    },
    proteinTarget: {
      type: Number,
    },
    carbsTarget: {
      type: Number,
    },
    fatsTarget: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
