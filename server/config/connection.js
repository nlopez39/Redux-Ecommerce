const mongoose = require("mongoose");
require("dotenv").config();

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-shopping"
// );
mongoose.connect(
  "mongodb+srv://nellymlopez3:AfNYvxuvQ1qKFpei@cluster0.rfuvhf2.mongodb.net/MONGODB_URI?retryWrites=true&w=majority&appName=Cluster0"
);
// mongoose.connect("mongodb://127.0.0.1:27017/mern-shopping");
module.exports = mongoose.connection;
