// Dependencies
var strava = require('strava-v3');
var LoopLeaderboard = require('../models/theloop');

function getStravaData() {
  console.log('Getting Strava data');

  // The Loop
  strava.segments.listLeaderboard({
      id: 8294116
    }, function(err, payload) {
    if(!err) {
      for (var i = payload.entries.length - 1; i >= 0; i--) {
        var person = payload.entries[i];
        var leaderboard = new LoopLeaderboard({
          rank: person.rank,
          name: person.athlete_name,
          image: person.athlete_profile,
          date: person.start_date_local,
          time: person.moving_time,
          pace: 'TODO'
        });
        leaderboard.save(function (err) {
          if (err)
            console.log(err);

          console.log('Loop leaderboard created');
        });
      };
    }
    else {
      console.log(err);
    }
  });
}

setTimeout(getStravaData, 5000);