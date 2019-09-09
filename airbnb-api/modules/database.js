//imports

const mongoose = require("mongoose");

//modules

module.exports = mongoose.connect(
  "mongodb://localhost:27017/airbnb",
  { useNewUrlParser: true },
  //this is an usual syntax to connect the node file to the mongoDB database
  err => {
    err
      ? console.log(err)
      : console.log("You are successfully connected to MongoDB, Good Coding");
  }
);
