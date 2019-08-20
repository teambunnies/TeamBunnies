const router = require("express").Router();
const consulateController = require('../../controllers/consulateController')


router.route('/')
    .get(consulateController.findAll)

router.route('/:id')
    .get(consulateController.findById)
 



//     var axios = require("axios");
// var cheerio = require("cheerio");
// var express = require("express");
// var PORT = process.env.PORT ||3000;

// // Initialize Express
// var app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // // Make public a static folder
// app.use(express.static("public"));

// app.get("/", function(req, res) {
// axios
//   .get(
//     "https://www.chicago.gov/city/en/depts/mayor/supp_info/office-of-new-americans/consulates.html"
//   )
//   .then(function(response) {
    
//     var $ = cheerio.load(response.data);
  
//     // $("tbody p strong").each(function(i, element) {
//     //   var result = {};
//     //   result.title = $(this).text();
//     //   console.log(result.title);
//     // });
//     $(" body > div.page-wrapper > div.container-fluid.container-body > div > div > div.container-fluid.twocolumns-new > div > div.col-sm-12.col-md-9.page-center > div.container-fluid.page-full-description > div > div > table > tbody > tr > td:nth-child(1)").each(function(i, element) {
//         var result = {};
//         result.address = $(this).text();
//         console.log(result.address);
//     	  // $('#articles').append(result.address);

//       });
//   });
// });
 


 

module.exports = router