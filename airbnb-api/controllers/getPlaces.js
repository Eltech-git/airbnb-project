const Places = require("../models/place");

module.exports = (req, res) => {
  Places.find(req.query)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
