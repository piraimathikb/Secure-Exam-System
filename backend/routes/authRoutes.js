
const express = require("express");
const rateLimit = require("express-rate-limit");
const { loginUser } = require("../controllers/authController");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Please try again in 15 minutes.",
  },
});

// Public login endpoint with rate limiting
router.post("/login", loginLimiter, loginUser);

module.exports = router;
