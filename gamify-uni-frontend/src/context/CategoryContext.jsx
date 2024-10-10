// // src/context/CategoryContext.jsx
// import { createContext, useState, useContext } from "react";

// const CategoryContext = createContext();

// export const useCategories = () => useContext(CategoryContext);

// export const CategoryProvider = ({ children }) => {
//   const [categories, setCategories] = useState([]);

//   const addCategory = (category) => {
//     setCategories([...categories, category]);
//   };

//   return (
//     <CategoryContext.Provider
//       value={{ categories, setCategories, addCategory }}
//     >
//       {children}
//     </CategoryContext.Provider>
//   );
// };

// src/context/CategoryContext.jsx
import { createContext, useState, useContext } from "react";

// Create the Category context
const CategoryContext = createContext();

// Custom hook to use the Category context
export const useCategories = () => useContext(CategoryContext);

// Category Provider component
export const CategoryProvider = ({ children }) => {
  // Initialize categories as an empty array
  const [categories, setCategories] = useState([]);

  // Function to add a category
  const addCategory = (category) => {
    setCategories([...categories, category]); // Append new category to the existing array
  };

  // Function to update a category
  const updateCategory = (updatedCategory) => {
    setCategories(
      categories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    ); // Update the category if the ID matches
  };

  // Provide categories, setCategories, addCategory, and updateCategory to children
  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, addCategory, updateCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
