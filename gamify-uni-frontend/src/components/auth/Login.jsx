

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // State for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // State for register form
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const [isLoginActive, setIsLoginActive] = useState(true); // State to toggle between login and register

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  // Handle Login Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem("token", res.data.token); // Save token in local storage
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  // Handle Register Submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      });
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`wrapper ${isLoginActive ? '' : 'active'}`}>
      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      {/* Login Form */}
      <div className={`form-box login ${isLoginActive ? '' : 'hidden'}`}>
        <h2 className="title animation" style={{ '--i': 0, '--j': 21 }}>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Email"
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 }}>Login</button>
          <div className="linkTxt animation" style={{ '--i': 5, '--j': 25 }}>
            <p>Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a></p>
          </div>
        </form>
      </div>

      {/* Info Text for Login */}
      <div className={`info-text login ${isLoginActive ? '' : 'hidden'}`}>
        <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--i': 1, '--j': 21 }}>
          Login to your Management Experience
        </p>
      </div>

      {/* Register Form */}
      <div className={`form-box register ${isLoginActive ? 'hidden' : ''}`}>
        <h2 className="title animation" style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
            <input
              type="text"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
              placeholder="Username"
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              placeholder="Email"
            />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 }}>Sign Up</button>
          <div className="linkTxt animation" style={{ '--i': 22, '--j': 5 }}>
            <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
          </div>
        </form>
      </div>

      {/* Info Text for Register */}
      <div className={`info-text register ${isLoginActive ? 'hidden' : ''}`}>
        <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--i': 18, '--j': 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?
        </p>
      </div>
    </div>
  );
};

export default Login;
