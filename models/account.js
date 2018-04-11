var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    type : { type : String },
    number : { type : Number },
    total : { type : Number },
    transactions : [{
        type : { type : String },
        method : { type : String },
        quantity : { type : Number },
        date : { type : Date },
        entity : { type : String }
    }]
});

module.exports = mongoose.model('account', accountSchema);
