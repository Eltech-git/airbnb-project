//imports
const Places = require("../models/place");

//module
module.exports = (req, res) => {
  Places.findById({ _id: req.params.id })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};