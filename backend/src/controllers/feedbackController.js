const Feedback = require("../models/Feedback");

// Create feedback
const createFeedback = async (req, res) => {
  try {
    const { userName, product, feedback, suggestions } = req.body;
    const newFeedback = new Feedback({ userName, product, feedback, suggestions });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback created successfully", newFeedback });
  } catch (err) {
    res.status(500).json({ error: "Failed to create feedback" });
  }
};

// Get all feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to get feedbacks" });
  }
};

module.exports = { createFeedback, getAllFeedback };
