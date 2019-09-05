const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost:27017/airbnb",
  { useNewUrlParser: true },
  err => {
    err ? console.log(err) : console.log("connected to mongoDB");
  }
);
