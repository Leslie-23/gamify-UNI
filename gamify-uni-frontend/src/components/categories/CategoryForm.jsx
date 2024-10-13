// src/components/categories/CategoryForm.jsx
import { useState } from "react";
import axios from "axios";

const BACKEND_API_URL = "http://localhost:5000";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_API_URL}/api/categories`, {
        name: categoryName,
      });
      setCategoryName("");
      alert("Category added!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
