const mongoose = require("mongoose");

module.exports = mongoose.model("Places", {
  title: {
    type: String,
    required: [false, "Title is required"]
  },
  description: {
    type: String,
    required: [, "Description is required"]
  },
  type: {
    type: String,
    required: [false, "Type is required"]
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
