// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var RunnerSchema = new Schema({
  name: String,
  goal_time: String,
  quote: String,
  on_strava: Boolean,
  strava_id: String
});

// Return model
module.exports = mongoose.model('Runner', RunnerSchema);