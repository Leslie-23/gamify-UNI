// routes/categoryRoutes.js
const express = require("express");
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createCategory); // Create a new category
router.get("/", authMiddleware, getCategories); // Get all categories for a user
router.delete("/:categoryId", authMiddleware, deleteCategory); // Delete a category

module.exports = router;
