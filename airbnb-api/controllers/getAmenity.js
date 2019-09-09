//imports
const Amenity = require("../models/amenity");

//modules
module.exports = (req, res) => {
  Amenity.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
