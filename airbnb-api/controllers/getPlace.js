//imports
const Places = require("../models/place");

//module
module.exports = (req, res) => {
  //find the place corrisponding to the given id in query
  Places.findById({ _id: req.params.id })
    //it will populate for type if id is given
    .populate("type")
    //it will populate host , if given, displaying name and avatar
    .populate({
      path: "host",
      select: "name avatar"
    })
    //it will execute JS operations within the script
    .lean()
    //it will respond with the data extrapolated from the DB
    .then(data => {
      res.send(data);
    })
    //if the script doesent work, it will display an error
    .catch(err => {
      res.send(err);
    });
};
