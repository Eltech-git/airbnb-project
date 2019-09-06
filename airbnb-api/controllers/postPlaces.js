//imports
const Places = require("../models/place");

//modules
module.exports = (req, res) => {
  Places.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
