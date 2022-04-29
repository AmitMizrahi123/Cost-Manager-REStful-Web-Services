var mongoose = require("mongoose");

const costSchema = new mongoose.Schema({
    description : {
        type: String
    },
    sum : {
        type: String
    }
});

const Cost = mongoose.model('CostManager.costs', costSchema);
module.exports = Cost;