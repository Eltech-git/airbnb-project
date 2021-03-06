//imports
const Types = require("../models/type");

//modules
module.exports = (req, res) => {
  //this searches the Types class in the DB to find all the documents within it.
  Types.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
