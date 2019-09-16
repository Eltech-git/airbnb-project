//imports
const express = require("express");
const mongoose = require("mongoose");
const database = require("./modules/database");
const bodyParser = require("body-parser");
require("dotenv").config();
let app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

//Main
app.get("/", require("./controllers/root"));

//Places

app.get("/places", require("./controllers/getPlaces"));
app.get("/place/:id", require("./controllers/getPlace"));
app.post("/place", require("./controllers/postPlaces"));
app.patch("/places/:id", require("./controllers/patchPlace"));
app.delete("/places/:id", require("./controllers/deletePlace"));

//Types

app.post("/types", require("./controllers/postType"));
app.get("/types", require("./controllers/getType"));

//Reviews

app.post("/reviews", require("./controllers/postReviews"));
app.get("/reviews", require("./controllers/getReviews"));

//Amenities

app.post("/amenities", require("./controllers/postAmenity"));
app.get("/amenities", require("./controllers/getAmenity"));

//User

app.post("/user", require("./controllers/postUser"));

//Operating port

app.listen(`${process.env.PORT}`, () => {
  console.log("The server you request is ready and running on port 4000");
});
