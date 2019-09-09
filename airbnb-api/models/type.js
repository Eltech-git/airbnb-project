const mongoose = require("mongoose");

module.exports = mongoose.model("types", {
  name: String
});
