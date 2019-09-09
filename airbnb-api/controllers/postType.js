//imports
const Types = require("../models/type");

//modules
module.exports = (req, res) => {
  Types.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
