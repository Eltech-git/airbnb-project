//imports
const express = require("express");
const mongoose = require("mongoose");
const database = require("./modules/database");
const bodyParser = require("body-parser");
let app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.get("/", require("./controllers/root"));
app.get("/places", require("./controllers/getPlaces"));
app.post("/places", require("./controllers/postPlaces"));
app.listen(4000, () => {
  console.log("The server you request is ready and running on port 4000");
});
