const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/secondDB");

const userSchema = mongoose.Schema({
  username: String,
  fullName: String,
  description: String,
  categories: {
    type: Array,
    default: [],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
