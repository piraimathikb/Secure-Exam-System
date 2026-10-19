
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    examinationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Examination",
      required: true,
      index: true,
    },

    questionText: {
      type: String,
      required: true,
      trim: true,
    },

    options: {
      type: [
        {
          type: String,
          required: true,
          trim: true,
        },
      ],
      validate: {
        validator: (options) =>
          options.length >= 2 && options.every((option) => option.length > 0),
        message: "A question must have at least two non-empty options",
      },
      required: true,
    },

    correctAnswer: {
      type: String,
      required: true,
      trim: true,
    },

    marks: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

questionSchema.index({ examinationId: 1, createdAt: 1 });

module.exports = mongoose.model("Question", questionSchema);
