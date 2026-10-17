
const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.use(protect, authorizeRoles("platformAdmin"));

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
