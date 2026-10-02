const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/",
  protect,
  authorizeRoles("platformAdmin"),
  getUsers
);

router.put(
  "/:id",
  protect,
  authorizeRoles("platformAdmin"),
  updateUser
);

module.exports = router;