'use strict';

var Mongo = require('mongodb');

function Food(user, o){
  this.name       = o.name;
  this.date       = o.date;
  this.userId     = Mongo.ObjectID(user._id);
  this.calConsume = o.calories;
}

Object.defineProperty(Food, 'collection',{
  get: function(){return global.mongodb.collection('foods');}
});

Food.create = function(user, o, cb){
  var e = new Food(user, o);
  Food.collection.save(e, cb);
};

Food.all = function(user, cb){
  Food.collection.find({user:user._id}).toArray(cb);
};

module.exports = Food;
