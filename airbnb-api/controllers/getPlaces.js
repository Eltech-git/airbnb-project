//Imports
const Places = require("../models/place");

//modules
module.exports = (req, res) => {
  //this will find all the documents inside the Places class that meet the required given elements in the query (you have to put in the url of the request : /route? element(ex. price or name or title)=120, wich will search all the elements that meet the condition of having price equal to 120
  Places.find(req.query)
    // this will show only the elements of the object listed below
    .select("bedrooms city country images price reviews title type")
    //this will populate type
    .populate("type")
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
