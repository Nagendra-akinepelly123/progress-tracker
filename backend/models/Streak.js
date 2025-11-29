const mongoose = require("express");

const streakSchema = new mongoose.Schema({
  user: {
    type: String,
    default: "default-user",
  },
  currentStreak: {
    type: Number,
    default: 0,
  },
  bestStreak: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: String,
    default: "",
  },
});

const Streak = mongoose.model("Streak", streakSchema);
module.exports = Streak;
