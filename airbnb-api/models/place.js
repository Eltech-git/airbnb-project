//Imports

const mongoose = require("mongoose");

//modules

module.exports = mongoose.model("Places", {
  title: {
    type: String,
    required: [false, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Types"
  },
  city: {
    type: String,
    required: [false, "City is required"]
  },
  country: {
    type: String,
    required: [false, "Country is required"]
  },
  price: {
    type: Number,
    required: [false, "Price is required"]
  },
  rating: {
    type: Number,
    default: 0
  },
  guests: {
    type: Number,
    required: [false, "Number of guests is required"]
  },
  bathrooms: {
    type: Number,
    required: [false, "Number of bathrooms is required"]
  }
});
