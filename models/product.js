var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ProductSchema = new mongoose.Schema({

  name:{eng:String,
       cant:String,
       mand:String},
       stnUnit:String,
     stnCurrency:String,
     pricePerUnit:Number,
     pictureUrl:String,
  PricePerStnUnit:{
    hkd_priceperunit:Number,
    usd_priceperunit:Number,
    cny_priceperunit:Number
  },
  id:String

});

var Product= module.exports = mongoose.model('Product', ProductSchema);
