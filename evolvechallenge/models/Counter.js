// The Counter model

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var counterSchema = new Schema({
    _id : String, // identifier of counter
    seq : Number // last id
});
 
module.exports = mongoose.model('Counter', counterSchema);