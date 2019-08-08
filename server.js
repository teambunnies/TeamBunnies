require('dotenv').config();
const express = require("express");
var session = require("express-session");
const routes = require("./routes");
const app = express();
var logger = require("morgan");
var mongoose = require("mongoose");
var db = require("./models/index");
const passport = require("./controllers/passportController.js");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//logger
app.use(logger("dev"));
//load MySql



// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//enable Pasport
app.use(session({ secret: "8E3JnZlm51v7ELzUC6N0l6bGPFtuJyG", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use(routes);
//load Mongo
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ingressChicago";

// mongoose.connect(MONGODB_URI);




// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

