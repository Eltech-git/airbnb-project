//Imports

const mongoose = require("mongoose");

//modules

module.exports = mongoose.model("Amenities", {
  name: {
    type: String,
    required: [true, "the name of the amenitiy is required"]
  },
  icon: {
    type: String,
    required: [true, "the icon for the amenity is required"]
  }
});
