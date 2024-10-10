// src/pages/Dashboard.jsx
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import CategoryList from "../components/categories/CategoryList";
import CategoryForm from "../components/categories/CategoryForm";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <TaskForm />
        <TaskList />
      </div>
      <div>
        <CategoryForm />
        <CategoryList />
      </div>
    </div>
  );
};

export default Dashboard;
