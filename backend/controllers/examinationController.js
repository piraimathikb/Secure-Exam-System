
const mongoose = require("mongoose");
const Examination = require("../models/Examination");

const isValidId = (id) => mongoose.isValidObjectId(id);

const isCoordinator = (req) => req.user.role === "coordinator";

const findAccessibleExamination = (id, req) => {
  const filter = { _id: id };

  if (isCoordinator(req)) {
    filter.createdBy = req.user.userId;
  }

  return Examination.findOne(filter);
};

const sendServerError = (res, action, error) => {
  console.error(`${action}:`, error);

  return res.status(500).json({
    success: false,
    message: `Failed to ${action.toLowerCase()}`,
  });
};

const validateExamFields = (data, partial = false) => {
  const stringFields = ["subject", "code", "date", "time"];
  const numericFields = ["duration", "totalQuestions"];

  for (const field of stringFields) {
    if (
      (!partial || data[field] !== undefined) &&
      (typeof data[field] !== "string" || !data[field].trim())
    ) {
      return `${field} must be a non-empty string`;
    }
  }

  for (const field of numericFields) {
    if (
      (!partial || data[field] !== undefined) &&
      (!Number.isInteger(data[field]) || data[field] < 1)
    ) {
      return `${field} must be a positive integer`;
    }
  }

  if (
    data.description !== undefined &&
    typeof data.description !== "string"
  ) {
    return "description must be a string";
  }

  if (data.date !== undefined) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(data.date)) return "date must use YYYY-MM-DD";

    const parsed = new Date(`${data.date}T00:00:00Z`);
    if (
      Number.isNaN(parsed.getTime()) ||
      parsed.toISOString().slice(0, 10) !== data.date
    ) {
      return "date is invalid";
    }
  }

  if (data.time !== undefined && !/^([01]\d|2[0-3]):[0-5]\d$/.test(data.time)) {
    return "time must use 24-hour HH:mm format";
  }

  return null;
};

// Create examination
const createExamination = async (req, res) => {
  try {
    const data = req.body || {};
    const requiredFields = [
      "subject",
      "code",
      "date",
      "time",
      "duration",
      "totalQuestions",
    ];

    if (requiredFields.some((field) => data[field] === undefined)) {
      return res.status(400).json({
        success: false,
        message: "All required examination fields must be provided",
      });
    }

    const validationError = validateExamFields(data);
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    const code = data.code.trim();
    const existing = await Examination.findOne({ code });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Examination code already exists",
      });
    }

    const examination = await Examination.create({
      subject: data.subject.trim(),
      code,
      date: data.date,
      time: data.time,
      duration: data.duration,
      totalQuestions: data.totalQuestions,
      description: data.description?.trim() || "",
      createdBy: req.user.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Examination created successfully",
      examination,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Examination code already exists",
      });
    }

    return sendServerError(res, "create examination", error);
  }
};

// Get all examinations
const getExaminations = async (req, res) => {
  try {
    const filter = {};

    if (isCoordinator(req)) {
      filter.createdBy = req.user.userId;
    }

    const examinations = await Examination.find(filter)
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: examinations.length,
      examinations,
    });
  } catch (error) {
    return sendServerError(res, "fetch examinations", error);
  }
};

// Get one examination
const getExaminationById = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid examination ID",
      });
    }

    const examination = await findAccessibleExamination(req.params.id, req)
      .populate("createdBy", "name email role");

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    return res.status(200).json({ success: true, examination });
  } catch (error) {
    return sendServerError(res, "fetch examination", error);
  }
};

// Update examination
const updateExamination = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid examination ID",
      });
    }

    const examination = await findAccessibleExamination(req.params.id, req);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status !== "draft") {
      return res.status(400).json({
        success: false,
        message: "Only draft examinations can be updated",
      });
    }

    const data = req.body || {};
    const allowedFields = [
      "subject",
      "code",
      "date",
      "time",
      "duration",
      "totalQuestions",
      "description",
    ];

    if (Object.keys(data).some((key) => !allowedFields.includes(key))) {
      return res.status(400).json({
        success: false,
        message: "Request contains unsupported fields",
      });
    }

    const validationError = validateExamFields(data, true);
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    for (const field of allowedFields) {
      if (data[field] !== undefined) {
        examination[field] =
          typeof data[field] === "string" ? data[field].trim() : data[field];
      }
    }

    await examination.save();

    return res.status(200).json({
      success: true,
      message: "Examination updated successfully",
      examination,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Examination code already exists",
      });
    }

    return sendServerError(res, "update examination", error);
  }
};

// Delete examination
const deleteExamination = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid examination ID",
      });
    }

    const examination = await findAccessibleExamination(req.params.id, req);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status !== "draft") {
      return res.status(400).json({
        success: false,
        message: "Only draft examinations can be deleted",
      });
    }

    await examination.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Examination deleted successfully",
    });
  } catch (error) {
    return sendServerError(res, "delete examination", error);
  }
};

// Publish examination
const publishExamination = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid examination ID",
      });
    }

    const examination = await findAccessibleExamination(req.params.id, req);

    if (!examination) {
      return res.status(404).json({
        success: false,
        message: "Examination not found",
      });
    }

    if (examination.status !== "draft") {
      return res.status(400).json({
        success: false,
        message: "Only draft examinations can be published",
      });
    }

    examination.status = "published";
    examination.publishedAt = new Date();

    await examination.save();

    return res.status(200).json({
      success: true,
      message: "Examination published successfully",
      examination,
    });
  } catch (error) {
    return sendServerError(res, "publish examination", error);
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
