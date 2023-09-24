const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
