//imports
const Reviews = require("../models/review");

//modules
module.exports = (req, res) => {
  Reviews.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
