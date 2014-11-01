// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var LoopLeaderboardSchema = new Schema({
    rank: Number,
    name: String,
    image: String,
    date: String,
    time: String,
    pace: String
});

// Return model
module.exports = mongoose.model('LoopLeaderboard', LoopLeaderboardSchema);