// src/components/auth/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token); // Save token in local storage
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col md:flex-row bg-slate-400">
      <form className="flex justify-center items-center flex-col bg-blue-600 rounded-lg h-3/5 w-1/3">
      <iframe className="h-72 w-72" src="https://lottie.host/embed/0c2353c4-b9f7-4323-9f1e-290713a77a67/3KPW7Sgmnb.json"></iframe>
    </form>
    <form className="flex justify-center items-center flex-col bg-blue-300 rounded-lg h-3/5 w-1/3" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold my-5">Login</h1>
      <input
        className="outline-gray-200 rounded-lg px-5 py-3 my-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
      className="outline-gray-200 rounded-lg px-5 py-3 my-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="bg-red-300 rounded-lg px-6 py-3 hover:shadow-xl" type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
