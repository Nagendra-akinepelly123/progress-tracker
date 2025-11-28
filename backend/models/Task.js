const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  date: { type: String },
  done: {
    type: String,
    default: false,
  },
  tags: {
    type: [String],
    default: [],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
