const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthday: { type: Date, required: true },
    marital_status: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
});

module.exports = mongoose.model('users', userSchema);