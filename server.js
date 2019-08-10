require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const app = express();
var logger = require("morgan");



const PORT = process.env.PORT || 3001;
const connectDB = require('./config/db')


connectDB()

app.use(express.json({ extended: false }));


//logger
app.use(logger("dev"));


// Define API routes here
app.use(routes);



// Starting our Express app
// =============================================================

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

