// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var strava = require('./app/strava');

// MongoDB
mongoose.connect('mongodb://localhost/sequence-marathon');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
var port = process.env.PORT || 8080;
app.listen(port);
console.log('API is running on port ' + port);