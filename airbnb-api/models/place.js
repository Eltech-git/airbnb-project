//Imports

const mongoose = require("mongoose");

//modules

module.exports = mongoose.model("Places", {
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "host name is required"]
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Types"
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
  },
  bedrooms: {
    type: Number,
    required: [true, "Number of bedrooms is required"]
  },
  images: [String],
  amenities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "amenity"
    }
  ]
});
