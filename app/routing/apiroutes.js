var friends = require('../data/friends');

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.JSON(friends);
        res.send(friends);
    });
    
    app.post("/api/friends", function(req, res){
        res.JSON(true);
    });
}