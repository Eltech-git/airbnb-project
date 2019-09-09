//imports
const Amenities = require("../models/amenity");

//modules
module.exports = (req, res) => {
  Amenities.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
