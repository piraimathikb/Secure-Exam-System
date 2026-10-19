
const mongoose = require("mongoose");
const Question = require("../models/Question");
const Examination = require("../models/Examination");

const isValidId = (id) => mongoose.isValidObjectId(id);

// Add a question
const addQuestion = async (req, res) => {
  try {
    const { examinationId, questionText, options, correctAnswer, marks } =
      req.body;

    if (
      !examinationId ||
      !questionText?.trim() ||
      !Array.isArray(options) ||
      options.length < 2 ||
      options.some((option) => typeof option !== "string" || !option.trim()) ||
      typeof correctAnswer !== "string" ||
      !correctAnswer.trim() ||
      !options.some((option) => option.trim() === correctAnswer.trim()) ||
      (marks !== undefined &&
        (!Number.isInteger(marks) || marks < 1))
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid question data",
      });
    }

    if (!isValidId(examinationId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid examination ID",
      });
    }

    const examination = await Examination.findById(examinationId);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status !== "draft") {
      return res.status(400).json({
        success: false,
        message: "Questions can only be added to draft examinations",
      });
    }

    if (req.user.role === "coordinator" &&
        examination.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: "You cannot modify this examination",
      });
    }

    const question = await Question.create({
      examinationId,
      questionText: questionText.trim(),
      options: options.map((option) => option.trim()),
      correctAnswer: correctAnswer.trim(),
      marks: marks ?? 1,
    });

    return res.status(201).json({
      success: true,
      message: "Question added successfully",
      question,
    });
  } catch (error) {
    console.error("Add question:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add question",
    });
  }
};

// Get questions for an examination
const getQuestions = async (req, res) => {
  try {
    const { examinationId } = req.params;

    if (!isValidId(examinationId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid examination ID",
      });
    }

    const examination = await Examination.findById(examinationId);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (
      req.user.role === "coordinator" &&
      examination.createdBy.toString() !== req.user.userId
    ) {
      return res.status(403).json({
        success: false,
        message: "You cannot access this examination",
      });
    }

    const filter = { examinationId };

    // Students can only retrieve questions from published exams.
    if (req.user.role === "student" && examination.status !== "published") {
      return res.status(403).json({
        success: false,
        message: "This examination is not available",
      });
    }

    const questions = await Question.find(filter)
      .select(req.user.role === "student" ? "-correctAnswer" : "")
      .sort({ createdAt: 1 });

    return res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });
  } catch (error) {
    console.error("Get questions:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch questions",
    });
  }
};

// Update a question
const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { questionText, options, correctAnswer, marks } = req.body;

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid question ID",
      });
    }

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    const examination = await Examination.findById(question.examinationId);

    if (!examination || examination.status !== "draft") {
      return res.status(400).json({
        success: false,
        message: "Only questions in draft examinations can be updated",
      });
    }

    if (
      req.user.role === "coordinator" &&
      examination.createdBy.toString() !== req.user.userId
    ) {
      return res.status(403).json({
        success: false,
        message: "You cannot modify this examination",
      });
    }

    const updatedText = questionText ?? question.questionText;
    const updatedOptions = options ?? question.options;
    const updatedAnswer = correctAnswer ?? question.correctAnswer;
    const updatedMarks = marks ?? question.marks;

    if (
      typeof updatedText !== "string" ||
      !updatedText.trim() ||
      !Array.isArray(updatedOptions) ||
      updatedOptions.length < 2 ||
      updatedOptions.some(
        (option) => typeof option !== "string" || !option.trim()
      ) ||
      typeof updatedAnswer !== "string" ||
      !updatedOptions.some(
        (option) => option.trim() === updatedAnswer.trim()
      ) ||
      !Number.isInteger(updatedMarks) ||
      updatedMarks < 1
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid question data",
      });
    }

    question.questionText = updatedText.trim();
    question.options = updatedOptions.map((option) => option.trim());
    question.correctAnswer = updatedAnswer.trim();
    question.marks = updatedMarks;

    await question.save();

    return res.status(200).json({
      success: true,
      message: "Question updated successfully",
      question,
    });
  } catch (error) {
    console.error("Update question:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update question",
    });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid question ID",
      });
    }

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    const examination = await Examination.findById(question.examinationId);

    if (!examination || examination.status !== "draft") {
      return res.status(400).json({
        success: false,
        message: "Only questions in draft examinations can be deleted",
      });
    }

    if (
      req.user.role === "coordinator" &&
      examination.createdBy.toString() !== req.user.userId
    ) {
      return res.status(403).json({
        success: false,
        message: "You cannot modify this examination",
      });
    }

    await question.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Question deleted successfully",
    });
  } catch (error) {
    console.error("Delete question:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete question",
    });
  }
};

module.exports = {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
};
