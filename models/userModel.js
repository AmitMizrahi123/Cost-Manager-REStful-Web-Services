const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthday: { type: String, required: true },
    marital_status: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
});

const User = mongoose.model('CostManager.users', userSchema);

module.exports = User;