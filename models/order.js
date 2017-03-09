var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var OrderSchema = new mongoose.Schema({

  id:String,
  quantity:Number,
  unit:String,
  pricePerUnit:Number,
  price:Number,
  dollarUnit:String
});

var Order= module.exports = mongoose.model('Order', OrderSchema);
