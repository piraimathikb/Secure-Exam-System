
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const validRoles = [
  "platformAdmin",
  "collegeAdmin",
  "coordinator",
  "student",
];

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof role !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid input data",
      });
    }

    if (
      password.length < 6 ||
      !validRoles.includes(role)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid role or password must be at least 6 characters",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
    ) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email address",
      });
    }

    if (await User.findOne({ email: normalizedEmail })) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: await bcrypt.hash(password, 12),
      role,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, role, isActive } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (
      name !== undefined &&
      (typeof name !== "string" || !name.trim())
    ) {
      return res.status(400).json({
        success: false,
        message: "Name cannot be empty",
      });
    }

    if (
      email !== undefined &&
      (typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    ) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email address",
      });
    }

    if (
      role !== undefined &&
      (typeof role !== "string" || !validRoles.includes(role))
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid user role",
      });
    }

    if (
      isActive !== undefined &&
      typeof isActive !== "boolean"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid account status",
      });
    }

    const isOwnAccount =
      String(user._id) === String(req.user.userId);

    if (isOwnAccount && role !== undefined && role !== user.role) {
      return res.status(400).json({
        success: false,
        message: "You cannot change your own role",
      });
    }

    if (isOwnAccount && isActive === false) {
      return res.status(400).json({
        success: false,
        message: "You cannot deactivate your own account",
      });
    }

    if (email !== undefined) {
      const normalizedEmail = email.trim().toLowerCase();

      const existingUser = await User.findOne({
        email: normalizedEmail,
        _id: { $ne: user._id },
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email is already registered",
        });
      }

      user.email = normalizedEmail;
    }

    if (name !== undefined) {
      user.name = name.trim();
    }

    if (role !== undefined) {
      user.role = role;
    }

    if (isActive !== undefined) {
      user.isActive = isActive;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
};

module.exports = { getUsers, createUser, updateUser };
