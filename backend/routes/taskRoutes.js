// routes/taskRoutes.js
const express = require("express");
const {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createTask); // Create a new task
router.get("/", authMiddleware, getTasks); // Get all tasks for a user
router.put("/:taskId", authMiddleware, updateTaskStatus); // Update task status
router.delete("/:taskId", authMiddleware, deleteTask); // Delete a task

module.exports = router;
