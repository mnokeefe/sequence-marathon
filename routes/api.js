// Dependencies
var express = require('express');
var router = express.Router();

// Models
var LoopLeaderboard = require('../models/theloop');

// Middleware to use for all requests
router.use(function(req, res, next) {
  console.log('API connection');
  next();
});

// Test route
router.get('/', function(req, res) {
  res.json({ message: 'Here be long distance runners' }); 
});

// The Loop
router.route('/loop')

  // GET leaderboard
  .get(function(req, res) {
    LoopLeaderboard.find(function(err, data) {
      if (err)
        res.send(err);

      res.json(data);
    });
  });

// Return router
module.exports = router;