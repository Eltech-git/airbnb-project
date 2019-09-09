//imports
const mongoose = require("mongoose");

//modules
module.exports = mongoose.model("Users", {
  avatar: {
    type: String,
    default: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  email: {
    type: String,
    required: [true, "email is required"]
  },
  location: {
    type: String,
    required: [true, "location is required"]
  },
  name: {
    type: String,
    required: [true, "name is required"]
  },
  password: {
    type: String,
    required: [true, "password is required"],
    slect: false
  }
});
