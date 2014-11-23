// Add the runners from the config file in to the database

// Dependencies
var mongoose = require('mongoose');
var runnerData = require('../../data/runners');
var Runner = require('../../models/runner');

function createRunners(element, index, array) {
  var runner = new Runner({
    name: element.name,
    goal_time: element.goal_time,
    quote: element.quote,
    on_strava: element.on_strava,
    strava_id: element.strava_id,
  });
  runner.save(function (err) {
    console.log(element.name + ' added');
    if (err)
      console.log(err);
  });
}

// Drop existing collection to start a fresh one
mongoose.connection.collections['runners'].drop(function(err) {
  console.log('runners collection dropped');
});

// Loop through runners in data/runners.json
runnerData.forEach(createRunners);