const Places = require("../models/place");

module.exports = (req, res) => {
  Places.find({ title: "Unbelievable infinite pool" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
