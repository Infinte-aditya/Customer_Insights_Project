const User = require("../models/User");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to get users" });
  }
};

module.exports = { createUser, getAllUsers };
