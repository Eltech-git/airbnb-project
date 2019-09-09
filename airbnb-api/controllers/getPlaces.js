//Imports
const Places = require("../models/place");

//modules
module.exports = (req, res) => {
  Places.find(req.query)
    .populate("type")
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
