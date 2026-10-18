
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      if (process.env.NODE_ENV === "production") {
        console.error("MONGO_URI is not configured.");
        process.exit(1);
      }
    }

    const connection = await mongoose.connect(
      mongoURI || "mongodb://127.0.0.1:27017/secureexam",
      {
        serverSelectionTimeoutMS: 10000,
      }
    );

    console.log(
      `MongoDB connected: ${
        process.env.NODE_ENV === "production"
          ? "database connection established"
          : connection.connection.host
      }`
    );
  } catch (error) {
    console.error("MongoDB connection failed.");

    if (process.env.NODE_ENV !== "production") {
      console.error(error.message);
    }

    process.exit(1);
  }
};

module.exports = connectDB;
