const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["seller", "buyer", "admin"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("Users", userSchema);

module.exports = user;
