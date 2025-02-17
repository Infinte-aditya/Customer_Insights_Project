const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  suggestions: {
    type: String,
    required: false,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
