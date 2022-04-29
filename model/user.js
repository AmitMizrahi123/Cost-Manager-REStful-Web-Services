var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    birthday: String,
    marital_status: String,
    phone: String,
    country: String,
    city: String
});

const User = mongoose.model('CostManager.users', userSchema);
module.exports = User;