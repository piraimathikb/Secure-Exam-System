const Examination = require("../models/Examination");

// Create Examination
const createExamination = async (req, res) => {
  try {
    const {
      subject,
      code,
      date,
      time,
      duration,
      totalQuestions,
      description,
    } = req.body;

    if (
      !subject ||
      !code ||
      !date ||
      !time ||
      !duration ||
      !totalQuestions
    ) {
      return res.status(400).json({
        success: false,
        message: "All required examination fields must be provided",
      });
    }

    const existingExamination = await Examination.findOne({ code });

    if (existingExamination) {
      return res.status(409).json({
        success: false,
        message: "Examination code already exists",
      });
    }

    const examination = await Examination.create({
      subject,
      code,
      date,
      time,
      duration,
      totalQuestions,
      description,
      createdBy: req.user.userId,
    });

    res.status(201).json({
      success: true,
      message: "Examination created successfully",
      examination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create examination",
      error: error.message,
    });
  }
};

// Get All Examinations
const getExaminations = async (req, res) => {
  try {
    const examinations = await Examination.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: examinations.length,
      examinations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch examinations",
      error: error.message,
    });
  }
};

// Get One Examination
const getExaminationById = async (req, res) => {
  try {
    const examination = await Examination.findById(req.params.id).populate(
      "createdBy",
      "name email role"
    );

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    res.status(200).json({
      success: true,
      examination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch examination",
      error: error.message,
    });
  }
};

// Update Examination
const updateExamination = async (req, res) => {
  try {
    const examination = await Examination.findById(req.params.id);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status === "published") {
      return res.status(400).json({
        success: false,
        message: "Published examination cannot be updated",
      });
    }

    const {
      subject,
      code,
      date,
      time,
      duration,
      totalQuestions,
      description,
    } = req.body;

    if (subject !== undefined) examination.subject = subject;
    if (code !== undefined) examination.code = code;
    if (date !== undefined) examination.date = date;
    if (time !== undefined) examination.time = time;
    if (duration !== undefined) examination.duration = duration;
    if (totalQuestions !== undefined) {
      examination.totalQuestions = totalQuestions;
    }
    if (description !== undefined) examination.description = description;

    await examination.save();

    res.status(200).json({
      success: true,
      message: "Examination updated successfully",
      examination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update examination",
      error: error.message,
    });
  }
};

// Delete Examination
const deleteExamination = async (req, res) => {
  try {
    const examination = await Examination.findById(req.params.id);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status === "published") {
      return res.status(400).json({
        success: false,
        message: "Published examination cannot be deleted",
      });
    }

    await Examination.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Examination deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete examination",
      error: error.message,
    });
  }
};

// Publish Examination
const publishExamination = async (req, res) => {
  try {
    const examination = await Examination.findById(req.params.id);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status === "published") {
      return res.status(400).json({
        success: false,
        message: "Examination is already published",
      });
    }

    examination.status = "published";
    examination.publishedAt = new Date();

    await examination.save();

    res.status(200).json({
      success: true,
      message: "Examination published successfully",
      examination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to publish examination",
      error: error.message,
    });
  }
};

module.exports = {
  createExamination,
  getExaminations,
  getExaminationById,
  updateExamination,
  deleteExamination,
  publishExamination,
};