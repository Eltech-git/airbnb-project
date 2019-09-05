const Places = require("../models/place");

module.exports = (req, res) => {
  Places.create({
    title: "Unbelievable infinite pool",
    description: "a",
    type: "0",
    city: "0",
    country: "0",
    price: 0,
    rating: 0,
    guests: 0,
    bathrooms: 0
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
