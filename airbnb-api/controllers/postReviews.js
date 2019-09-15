//imports
const Reviews = require("../models/review");

//modules
module.exports = (req, res) => {
  Reviews.create(req.body)
    .then(review => {
      Reviews.findById(review._id)
        .populate("author")
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
};
