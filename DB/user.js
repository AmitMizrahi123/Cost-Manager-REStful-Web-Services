var mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect(process.env.MONGODB);
var Schema = mongoose.Schema;

const userSchema = new Schema({
  id: int,
  first_name: string,
  last_name: string,
  birthday: Date,
  marital_status: string,
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("users", userSchema);