// Dependencies
var strava = require('strava-v3');
var LoopLeaderboard = require('../../models/theloop');

// The Loop
console.log('Getting Loop leaderboard');
strava.segments.listLeaderboard({
    id: 8294116
  }, function(err, payload) {
  if(!err) {

    // Add data receieved from Strava to the database
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

        console.log('Done');
      });
    };

  }
  else {
    console.log(err);
  }
});