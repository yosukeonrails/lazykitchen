var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ItemSchema = new mongoose.Schema({

  id:String,
  quantity:Number,
  unit:String,
  pricePerUnit:Number,
  price:Number,
  dollarUnit:String
});

var Item= module.exports = mongoose.model('Item', ItemSchema);
