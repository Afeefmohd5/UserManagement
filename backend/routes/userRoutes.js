const express = require("express");
const router = express.Router();
const User = require("../models/User");

// CREATE User
router.post("/", async (req, res) => {
  const user = new User(req.body);
  const savedUser = await user.save();
  res.json(savedUser);
});

// GET Users (Search + Filter)
router.get("/", async (req, res) => {
  const { search, role, status } = req.query;

  let query = {};

  // Search
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } }
    ];
  }

  // Filters
  if (role) query.role = role;
  if (status) query.status = status;

  const users = await User.find(query);
  res.json(users);
});

// UPDATE User
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
});

// DELETE User
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;