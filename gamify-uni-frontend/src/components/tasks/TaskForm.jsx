// src/components/tasks/TaskForm.jsx
import { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");

  const BACKEND_API_URL = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_API_URL}/api/tasks`, {
        name: taskName,
        category,
      });
      setTaskName("");
      setCategory("");
      alert("Task added!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
