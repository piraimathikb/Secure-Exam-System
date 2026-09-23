const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
const authRoutes = require("./routes/authRoutes");
app.use(express.json());
app.use("/api/auth", authRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SecureExam Backend is running successfully!",
  });
});

// Health check API
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "SecureExam API is healthy!",
    status: "online",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`SecureExam Backend running on http://localhost:${PORT}`);
});