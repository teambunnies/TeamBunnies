require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const app = express();
var logger = require("morgan");


const PORT = process.env.PORT || 3001;
const connectDB = require('./config/db')
connectDB()

// Define middleware here

app.use(express.json({ extended: true }));



//logger
app.use(logger("dev"));
//load MySql


// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

