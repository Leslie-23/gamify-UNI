// app.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use CORS middleware
app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from the frontend

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

module.exports = app;
