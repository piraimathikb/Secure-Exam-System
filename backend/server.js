const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const protect = require("./middleware/authMiddleware");
const authorizeRoles = require("./middleware/roleMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const examinationRoutes = require("./routes/examinationRoutes");
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/examinations", examinationRoutes);

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
app.get(
  "/api/admin-test",
  protect,
  authorizeRoles("platformAdmin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Platform Admin access granted!",
      user: req.user,
    });
  }
);
app.listen(PORT, () => {
  console.log(`SecureExam Backend running on http://localhost:${PORT}`);
});