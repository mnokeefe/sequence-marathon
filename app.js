var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');


// STRAVA API ---------------------------------------------------

// var strava  = require('./app/strava');

var strava = require('strava-v3');

var stravaData = [];

strava.activities.get({
    id: 213259791
  }, function(err, payload) {
  if(!err) {
    //stravaData = payload;
    stravaData[0] = payload.athlete.id; // get the name
    stravaData[1] = payload.distance; // convert to km
    stravaData[2] = payload.average_speed; // convert from m/s to pace
    // Also get time

    // for(var i = 0; i < payload.length; i++) {
    //   // stravaData.push({
    //   //   activity: payload
    //   // });
    //   console.log(payload);

    // }








  }
  else {
    console.log(err);
  }
});


// SERVER -------------------------------------------------------

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set port

// ROUTES 
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json(stravaData); 
});

// REGISTERROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Running data on port ' + port);