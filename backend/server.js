
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const protect = require("./middleware/authMiddleware");
const authorizeRoles = require("./middleware/roleMiddleware");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const examinationRoutes = require("./routes/examinationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware must run before API routes
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json({ limit: "1mb" }));

// Connect to MongoDB
connectDB();

// Authentication routes
app.use("/api/auth", authRoutes);

// User management routes
app.use("/api/users", userRoutes);

// Examination management routes
app.use("/api/examinations", examinationRoutes);

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

// Protected Platform Admin test route
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

// Start server
app.listen(PORT, () => {
  console.log(
    `SecureExam Backend running on http://localhost:${PORT}`
  );
});
