// src/components/categories/CategoryList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_API_URL = "http://localhost:5000";

const CategoryList = () => {
  const [categories, setCategories] = useState([]); // Ensure categories starts as an empty array

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKEND_API_URL}/api/categories`);

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error(
            "Expected an array of categories, but got:",
            response.data
          );
          setCategories([]); // Reset categories to an empty array if the response is not valid
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
