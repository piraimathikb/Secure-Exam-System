const express = require("express");

const {
  createExamination,
  getExaminations,
  getExaminationById,
  updateExamination,
  deleteExamination,
  publishExamination,
} = require("../controllers/examinationController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Get all examinations
router.get(
  "/",
  protect,
  authorizeRoles("platformAdmin", "collegeAdmin", "coordinator"),
  getExaminations
);

// Get one examination
router.get(
  "/:id",
  protect,
  authorizeRoles("platformAdmin", "collegeAdmin", "coordinator"),
  getExaminationById
);

// Create examination
router.post(
  "/",
  protect,
  authorizeRoles("platformAdmin", "collegeAdmin", "coordinator"),
  createExamination
);

// Update examination
router.put(
  "/:id",
  protect,
  authorizeRoles("platformAdmin", "collegeAdmin", "coordinator"),
  updateExamination
);

// Delete examination
router.delete(
  "/:id",
  protect,
  authorizeRoles("platformAdmin", "collegeAdmin", "coordinator"),
  deleteExamination
);

// Publish examination
router.patch(
  "/:id/publish",
  protect,
  authorizeRoles("platformAdmin", "collegeAdmin", "coordinator"),
  publishExamination
);

module.exports = router;