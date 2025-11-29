const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//Get all tasks using the date//Get all tasks using the date
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find(req.query);

    const totalTasks = tasks.length;
    let tasksCompleted = 0;

    // 1. Handle the case where there are NO tasks
    if (totalTasks === 0) {
      return res.json({ progress: "No Tasks Found", percentage: 0 });
    }

    tasks.forEach((task) => {
      // Shorter way to check if task.done is true/truthy
      if (task.done) {
        tasksCompleted++;
      }
    });

    let tasksProgress = (tasksCompleted / totalTasks) * 100;

    // Optional: Round the percentage for a cleaner result
    const roundedProgress = Math.round(tasksProgress);

    // 3. Return a more informative response
    if (roundedProgress > 50) {
      return res.json({ progress: "Productive", percentage: roundedProgress });
    } else if (roundedProgress > 25) {
      // No need to check <= 50 again
      return res.json({ progress: "Moderate", percentage: roundedProgress });
    } else {
      return res.json({ progress: "Low", percentage: roundedProgress });
    }
  } catch (err) {
    // It's often helpful to log the error on the server side
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

module.exports = router;
