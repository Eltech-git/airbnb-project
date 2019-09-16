//imports

const mongoose = require("mongoose");
require("dotenv").config();
//modules

module.exports = mongoose.connect(
  //qui adesso sto sostituendo l idirizzo del database con un un indirizzo registrato all interno del file env, al quale hop assegnato una variabile la quale sto richiamando qui all interno della template literal.
  `${process.env.MONGODB_URI}`,
  { useNewUrlParser: true },
  //this is an usual syntax to connect the node file to the mongoDB database
  err => {
    err
      ? console.log(err)
      : console.log("You are successfully connected to MongoDB, Good Coding");
  }
);
