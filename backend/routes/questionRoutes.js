const express = require("express");
const router = express.Router();

const {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

const protect = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

// Add a question
router.post("/", protect, allowRoles("coordinator", "collegeAdmin", "platformAdmin"), addQuestion);

// Get questions for an examination
router.get(
  "/:examinationId",
  protect,
  allowRoles("coordinator", "collegeAdmin", "platformAdmin", "student"),
  getQuestions
);

// Update a question
router.put(
  "/:id",
  protect,
  allowRoles("coordinator", "collegeAdmin", "platformAdmin"),
  updateQuestion
);

// Delete a question
router.delete(
  "/:id",
  protect,
  allowRoles("coordinator", "collegeAdmin", "platformAdmin"),
  deleteQuestion
);

module.exports = router;
