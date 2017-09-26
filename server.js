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

// var findFriend = function () {

// };

//to make sure the server we set up above actually runs
// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

// var results = [];

var user = {
  name: "Thomas",
  photo: "someurl.com",
  scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
  ]
}

function findBestFriend(user, friends) {
  var bestFriend = null;
  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    var sum = 0;

    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];

      for (var k = 0; k < user.scores.length; k++) {
        var currentUserScore = user.scores[k];
        sum += Math.abs(currentFriendScore - currentUserScore);
      }
      if (bestFriend === null || sum <= bestFriend.score) {
        bestFriend = { friend: currentFriend, score: sum };
      }
      // do something to check if we have a new best friend
    }
    
  }
  return bestFriend;
}

var bestFriend = findBestFriend(user, friends);
console.log(bestFriend);

