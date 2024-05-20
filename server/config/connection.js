const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/mern-shopping"
);

module.exports = mongoose.connection;
