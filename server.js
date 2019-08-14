require('dotenv').config();
const express = require("express");
var session = require("express-session");
const routes = require("./routes");
const app = express();
var logger = require("morgan");
var mongoose = require("mongoose");
var db = require("./models/index");
// const passport = require("./controllers/passportController.js");
 // Axios is a promised-based http library, similar to jQuery's Ajax method
  // It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)


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

//enable Pasport
// app.use(session({ secret: "8E3JnZlm51v7ELzUC6N0l6bGPFtuJyG", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// 
//load Mongo
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ingressChicago";

// mongoose.connect(MONGODB_URI);



 
// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.




//Scraping Chicago Photos





// A GET route for scraping the Pexels website
// app.get("/photos", function(req, res) {
//     axios.get( "https://www.pexels.com/search/chicago/").then(function(response) {

//     var $ = cheerio.load(response.data);
//     console.log("Hello")
    // $("img").each(function(i, element) {
    //     var result = {};
    //     result.title = $(this).text();
       
// Create a new Article using the `result` object built from scraping
//       db.Article.create(result).then(function(dbArticle){
//           res.json(dbArticle)
// //view the added result in the console
//       }).catch(function(err){
//           // If an error occured, log it
//           console.log(err);
//       });





//  // Route for getting all Articles from the db
// app.get("/photos", function(req, res) {
//     // Grab every document in the Articles collection
//     db.Article.find({}).then(function(dbArticle){
// // If successful , send them back to the client
// res.json(dbArticle);
//     }).catch(function(err){
//          // If an error occurred, send it to the client
//          res.json(err);
//     });

// });



// });



// Grab the articles as a json
// $.getJSON("/articles", function(data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // Display the  information on the page
//     $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title  + "</p>");
//   }
// });




  // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .then(function(data) {
//       console.log(data);
//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });

// When you click the savenote button
// $(document).on("click", "#savenote", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // Value taken from title input
//       title: $("#titleinput").val(),
//       // Value taken from note textarea
//       body: $("#bodyinput").val()
//     }
//   })
//     // With that done
//     .then(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       $("#notes").empty();
//     });

//   // Also, remove the values entered in the input and textarea for note entry
//   $("#titleinput").val("");
//   $("#bodyinput").val("");
// });








// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

