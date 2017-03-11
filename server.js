
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config= require('./config');
var Item= require('./models/items.js');
var Order= require('./models/order.js');


var app = express();


var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.createConnection('mongodb://localhost/');
//
// mongoose.connection.on('error', function(err) {
//     console.error('Could not connect.  Error:', err);
// });



// app.use(express.static('build'));
// parse application/x-www-form-urlencoded


// parse application/json
app.use(bodyParser.json());
var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);
app.use(bodyParser.json());
app.use(express.static('build'));

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.post('/order', function(req, res){

  let orderData= {

    id:req.body.id,
    quantity:req.body.quantity,
    unit:req.body.unit,
    pricePerUnit:req.body.pricePerUnit,
    price:req.body.price,
    dollarUnit:req.body.dollarUnit
};

Order.findOneAndUpdate({ id: req.body.id},{$set:orderData},{upsert:true, new:true},function(err,data){
      if(err){

      }
      res.json(data);
      console.log('posted', data);
});

});


app.get('/items', function(req, res){

    Item.find({}, function(err, data){

          if(err){

          }

      res.json(data);
  });

});

/// post a product as admin //
app.post('/item', function(req, res){

  let itemData= {
    name:{eng:req.body.eng,
         cant:req.body.cant,
         mand:req.body.mand},
         stnUnit:req.body.stnUnit,
       stnCurrency:req.body.stnCurrency,
       pricePerUnit:req.body.pricePerUnit,
       pictureUrl:req.body.pictureUrl,
    PricePerStnUnit:{
      hkd_priceperunit:req.body.hkd_priceperunit,
      usd_priceperunit:req.body.usd_priceperunit,
      cny_priceperunit:req.body.cny_priceperunit
    },
    id:req.body.id
};

Item.findOneAndUpdate({ id:req.body.id},{$set:itemData},{upsert:true, new:true},function(err, data){
      if(err){

      }
      res.json(data);
      console.log('posted', data);
});

});




var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};


if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}
