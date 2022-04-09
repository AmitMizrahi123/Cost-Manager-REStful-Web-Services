var mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect(process.env.MONGODB);
var Schema = mongoose.Schema;

const costSchema = new Schema({
  description: String,
  sum: String
});

costSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("cost", costSchema);