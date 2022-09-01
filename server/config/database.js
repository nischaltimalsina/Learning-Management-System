const mongoose = require("mongoose");
const config = require("./config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(config.mongoUri, options)
  .then(() => console.log("Connected to Database Successfully"));

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});
