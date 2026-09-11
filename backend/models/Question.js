const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    examinationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Examination",
    },

    question: {
      type: String,
      required: true,
      trim: true,
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: function (options) {
          return options.length === 4;
        },
        message: "A question must have exactly 4 options.",
      },
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },

    marks: {
      type: Number,
      default: 1,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);