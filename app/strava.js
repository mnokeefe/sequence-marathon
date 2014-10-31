var strava = require('strava-v3');

var stravaData = [];

strava.segments.listEfforts({
    id: 8294116
  }, function(err, payload) {
  if(!err) {
    stravaData[0] = payload;
  }
  else {
    console.log(err);
  }
});


// var bum = 'bum'

// Export it
// module.exports = {
//   loopEfforts: function(){
//     return bum;
//   }
// };
console.log(stravaData);

exports.stravaData = function() {
  return stravaData;
}