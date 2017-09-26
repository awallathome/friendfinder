var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var survey = require('./app/public/survey.html');
var friends = require("./app/data/friends.js");

var app = express();

var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiroutes");
require("./app/routing/htmlroutes");

var findFriend = function () {

};

//to make sure the server we set up above actually runs
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// HERE, I AM PUTTING TOGETHER CODE FOR THE FUNCTION THAT MATCHES THE USER WITH THE BEST MATCH. IT IS MY THIRD ATTEMPT TO DO SO...
function compareScores(){
  for (i = 0; i > friends.length; i++) {
    var friendOnDeck = friends[i].scores;
    var sum = 0;sum += objectOnDeck[i];

  }

};