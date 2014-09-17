'use strict';

var Mongo = require('mongodb');

function Food(user, o){
  this.name       = o.name;
  this.date       = Date.parse(o.date);
  this.userId     = Mongo.ObjectID(user._id);
  this.calories = o.calories;
}

Object.defineProperty(Food, 'collection',{
  get: function(){return global.mongodb.collection('foods');}
});

Food.addFood = function(user, o, cb){
  var f = new Food(user, o);
  Food.collection.save(f, cb);
};

Food.all = function(user, cb){
  Food.collection.find({user:user._id}).toArray(cb);
};

module.exports = Food;
