const mongoose = require('mongoose');

const userAverage = new mongoose.Schema({
    courseName: { type: String, required: true },
    credit: { type: Number, required: true },
    grade: { type: Number, required: true },
    year: { type: Date, required: true },
    semester: { type: String, required: true }
});

module.exports = mongoose.model('userAverage', userAverage);