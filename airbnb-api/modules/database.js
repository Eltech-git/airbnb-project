const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost:27017/airbnb",
  { useNewUrlParser: true },
  err => {
    err
      ? console.log(err)
      : console.log("You are successfully connected to MongoDB, Good Coding");
  }
);
