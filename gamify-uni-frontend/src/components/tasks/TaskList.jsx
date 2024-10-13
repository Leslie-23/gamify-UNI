// src/components/tasks/TaskList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_API_URL = "http://localhost:5000";

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // Initialize tasks as an empty array

  useEffect(() => {
    // Fetch tasks from backend
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${BACKEND_API_URL}/api/tasks`);

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error("Expected an array of tasks, but got:", response.data);
          setTasks([]); // Reset tasks to an empty array if the response is not valid
        }
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, { status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (err) {
      console.error("Error updating task status:", err);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <span>
                {task.name} - {task.status}
              </span>
              <select
                value={task.status}
                onChange={(e) => updateTaskStatus(task._id, e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
