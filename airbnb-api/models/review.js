//Imports

const mongoose = require("mongoose");

//modules

module.exports = mongoose.model("Reviews", {
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    required: [true, "content id required"]
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Places"
  }
});
