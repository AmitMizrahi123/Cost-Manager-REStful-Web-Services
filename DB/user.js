var mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect(process.env.MONGODB);
var Schema = mongoose.Schema;

const userSchema = new Schema({
  id: int,
  first_name: String,
  last_name: String,
  birthday: Date,
  marital_status: String,
  Phone: String,
  Country: String,
  City: String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("users", userSchema);