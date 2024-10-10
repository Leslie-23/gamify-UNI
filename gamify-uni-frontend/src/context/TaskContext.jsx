// // src/context/TaskContext.jsx
// import { createContext, useState, useContext } from "react";

// const TaskContext = createContext();

// export const useTasks = () => useContext(TaskContext);

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(
//       tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
//     );
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, setTasks, addTask, updateTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// src/context/TaskContext.jsx
import { createContext, useState, useContext } from "react";

// Create the Task context
const TaskContext = createContext();

// Custom hook to use the Task context
export const useTasks = () => useContext(TaskContext);

// Task Provider component
export const TaskProvider = ({ children }) => {
  // Initialize tasks as an empty array
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, task]); // Append new task to the existing array
  };

  // Function to update a task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    ); // Update the task if the ID matches
  };

  // Provide tasks, setTasks, addTask, and updateTask to children
  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
