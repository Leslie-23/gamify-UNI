// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./pages/Dashboard";
import { TaskProvider } from "./context/TaskContext";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <TaskProvider>
      <CategoryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </CategoryProvider>
    </TaskProvider>
  );
}

export default App;

// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/auth/Login.jsx";
// import Register from "./components/auth/Register.jsx";
// // import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
