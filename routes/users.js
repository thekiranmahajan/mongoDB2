const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/secondDB");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String,
  // fullName: String,
  // description: String,
  // categories: {
  //   type: Array,
  //   default: [],
  // },
  // dateCreated: {
  //   type: Date,
  //   default: Date.now,
  // },
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
