const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    userName: String,
    timetable: [Number],
    createdAt: { type: Date, default: Date.now },
    lastUpdatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);