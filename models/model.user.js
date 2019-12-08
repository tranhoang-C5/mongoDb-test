const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 256
  },
  hobby: {
    type: String,
    minlength: 6,
    maxlength: 256
  }
});

module.exports = mongoose.model("user", userSchema);
