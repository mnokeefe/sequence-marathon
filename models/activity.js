// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var ActivitySchema = new Schema({
  activity_id: String,
  runner_id: String,
  date: String,
  time: String,
  distance: String,
  pace: String
});

// Return model
module.exports = mongoose.model('Activity', ActivitySchema);