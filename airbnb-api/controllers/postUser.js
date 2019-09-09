//imports
const Users = require("../models/user");

//modules
module.exports = (req, res) => {
  Users.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
