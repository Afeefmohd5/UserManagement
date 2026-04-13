const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);