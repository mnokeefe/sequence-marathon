// TODO
// For each runner who has a strava ID
// Look at when the last activity in the database was completed
// If there aren't any activites default to a pre-defined date
// Get activites and add to DB

// Dependencies
var strava = require('strava-v3');
var Activity = require('../../models/activity');

// Get activities for the Sequence club on Strava
console.log('Getting Sequence club activities');
strava.clubs.listActivities({
    id: 79737
  }, function(err, payload) {
  if(!err) {

    // Add data receieved from Strava to the database
    for (var i = payload.length - 1; i >= 0; i--) {
      var stravaData = payload[i];
      var activity = new Activity({
        activity_id: stravaData.id,
        runner_id: stravaData.athlete.id,
        date: stravaData.start_date,
        time: stravaData.moving_time,
        distance: stravaData.distance,
        pace: 'TODO'
      });
      activity.save(function (err) {
        if (err)
          console.log(err);

        console.log(activity_id + 'added');
      });
    };

  }
  else {
    console.log(err);
  }
});