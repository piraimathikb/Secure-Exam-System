const Question = require("../models/question");

// Create a question
const createQuestion = async (req, res) => {
  try {
    const { examinationId, question, options, answer, marks } = req.body;

    const newQuestion = await Question.create({
      examinationId,
      question,
      options,
      answer,
      marks,
    });

    res.status(201).json({
      message: "Question created successfully",
      question: newQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create question",
      error: error.message,
    });
  }
};

// Get all questions for an examination
const getQuestionsByExamination = async (req, res) => {
  try {
    const { examinationId } = req.params;

    const questions = await Question.find({ examinationId });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
};

module.exports = {
  createQuestion,
  getQuestionsByExamination,
};