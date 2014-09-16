'use strict';

var Mongo = require('mongodb');

function Exercise(user, o){
  this.name   = o.activity.name;
  this.date = o.date;
  this.userId = Mongo.ObjectID(user._id);
  this.hours  = o.hours;
  this.calBurn  = (user.bmr/24) * o.activity.level.met * this.hours;
}

Object.defineProperty(Exercise, 'collection',{
  get: function(){return global.mongodb.collection('exercises');}
});

Exercise.create = function(user, o, cb){
  var e = new Exercise(user, o);
  Exercise.collection.save(e, cb);
};

Exercise.all = function(user, cb){
  Exercise.collection.find({user:user._id}).toArray(cb);
};

module.exports = Exercise;
