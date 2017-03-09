var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ItemSchema = new mongoose.Schema({

       name:{eng:String,
            cant:String,
            mand:String},
       price:{
         hkd:Number,
         usd:Number,
         cny:Number
       },
    id:String

});

var Item= module.exports = mongoose.model('Item', ItemSchema);
