//imports
const Places = require("../models/place");

//module
module.exports = (req, res) => {
  Places.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
