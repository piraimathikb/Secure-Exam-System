const express = require("express");

const {
  createQuestion,
  getQuestionsByExamination,
} = require("../controllers/questionController");

const router = express.Router();

// Create a question
router.post("/", createQuestion);

// Get all questions for an examination
router.get("/examination/:examinationId", getQuestionsByExamination);

module.exports = router;