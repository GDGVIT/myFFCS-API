const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    userName: String,
    timetables: [[Number]],
    createdAt: { type: Date, default: Date.now },
    lastUpdatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);