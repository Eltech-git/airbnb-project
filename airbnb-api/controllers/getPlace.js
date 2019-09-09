//imports
const Places = require("../models/place");

//module
module.exports = (req, res) => {
  Places.findById({ _id: req.params.id })
    .populate("type")
    .populate({
      path: "host",
      select: "name avatar"
    })
    .lean()
    // .select("name avatar")
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
