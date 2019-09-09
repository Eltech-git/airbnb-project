//imports
const Type = require("../models/type");

//modules
module.exports = (req, res) => {
  Type.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
