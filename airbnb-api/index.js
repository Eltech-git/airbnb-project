const express = require("express");
let app = express();

app.listen(4000, () => {
  console.log("The server you request is ready and running on port 4000");
});
