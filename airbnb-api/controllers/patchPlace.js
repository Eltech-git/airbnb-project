//imports
const Places = require("../models/place");

//module
module.exports = (req, res) => {
  //this will search the document with the related ID and update (patch/fix) it with the data recieved from the body (hardcoded in postman). The id has to be inserted in the url
  Places.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
