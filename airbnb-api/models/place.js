const mongoose = require("mongoose");

module.exports = mongoose.model("Places", {
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  type: {
    type: String,
    required: [true, "Type is required"]
  },
  city: {
    type: String,
    required: [true, "City is required"]
  },
  country: {
    type: String,
    required: [true, "Country is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  rating: {
    type: Number,
    default: 0
  },
  guests: {
    type: Number,
    required: [true, "Number of guests is required"]
  },
  bathrooms: {
    type: Number,
    required: [true, "Number of bathrooms is required"]
  }
});
