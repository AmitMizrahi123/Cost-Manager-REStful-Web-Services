const mongoose = require('mongoose');

const userAverage = new mongoose.Schema({
    courseName: { type: String, required: true },
    grade: { type: Number, required: true },
    year: { type: Number, required: true },
    semester: { type: Number, required: true },
    semesterAverage: { type: Number },
    yearAverage: { type: Number },
    userId: { type: String }
});

module.exports = mongoose.model('userAverage', userAverage);