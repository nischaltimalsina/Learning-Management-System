const express = require("express");
const mongoose = require("mongoose");

require("./config/database");
const config = require("./config/config");

const app = express();

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port", config.port);
  }
});
