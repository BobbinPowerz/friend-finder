
var matchList = require("../data/friends.js");
var path = require("path");

module.exports = function(app){
  app.get('/api/friends', function(req, res){
    res.json(matchList);
  });

  app.post('/api/friends', function(req, res){
    matchList.push(req.body);
  })
};