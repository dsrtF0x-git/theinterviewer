const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = Question = mongoose.model('question', QuestionSchema);
