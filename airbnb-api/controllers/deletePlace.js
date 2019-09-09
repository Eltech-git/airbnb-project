//imports
const Places = require("../models/place");

//module
module.exports = (req, res) => {
  //this will find the document that meets the given id (in the url) and delete it.
  Places.findByIdAndDelete({ _id: req.params.id })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
