const express = require("express");
const mongoose = require("mongoose");
const database = require("./modules/database");
let app = express();

app.get("/", require("./controllers/root"));
app.get("/places", require("./controllers/getPlaces"));

app.listen(4000, () => {
  console.log("The server you request is ready and running on port 4000");
});
