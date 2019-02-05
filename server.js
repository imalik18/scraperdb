var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Initialize Express
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = process.env.PORT || 3500;

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
    res.render("index");
  });
  
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  

