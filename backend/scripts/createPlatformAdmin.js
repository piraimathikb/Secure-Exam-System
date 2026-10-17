require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const createPlatformAdmin = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/secureexam"
    );

    const email = "admin@secureexam.com";
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      console.log("An account with this email already exists.");
      return;
    }

    const password = process.env.INITIAL_ADMIN_PASSWORD;

    if (!process.env.JWT_SECRET || !password) {
      throw new Error(
        "Set JWT_SECRET and INITIAL_ADMIN_PASSWORD in your .env file first."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      name: "Platform Admin",
      email,
      password: hashedPassword,
      role: "platformAdmin",
      isActive: true,
    });

    console.log("Platform Admin account created successfully.");
    console.log("Email:", email);
    console.log("Use the password you configured in .env.");
  } catch (error) {
    console.error("Admin creation failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

createPlatformAdmin();