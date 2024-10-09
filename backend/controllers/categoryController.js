// controllers/categoryController.js
const Category = require("../models/Category");

// Create a new category
exports.createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const category = new Category({
      name,
      user: req.user.id,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all categories for a user
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.remove();
    res.json({ message: "Category removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
