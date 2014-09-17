'use strict';

var bcrypt = require('bcrypt'),
    //moment = require('moment'),
    Mongo  = require('mongodb');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, cb);
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user || o.password.length < 3){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(o, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.update = function(obj, user, cb){
  user.email = obj.email;
  user.age = obj.age;
  user.height = obj.height;
  user.weight = obj.weight;
  user.bmr = obj.bmr;
  user.gender = obj.gender;
  User.collection.save(user, cb);
};

User.getResults = function(user, body, cb){
  var results = {},
      totalCalsIn = 0,
      totalCalsOut = 0;

  require('./food').collection.find({userId:user._id, date:{$gte: Date.parse(body.startDate), $lt: Date.parse(body.endDate)}}).toArray(function(err, meals){
    results.meals = meals || [];

    results.totalCalsIn = 0;
    results.meals.forEach(function(meal){
      totalCalsIn += meal.calories;
    });

    require('./exercise').collection.find({userId:user._id, date:{$gte: Date.parse(body.startDate), $lt: Date.parse(body.endDate)}}).toArray(function(err, exercises){

      results.exercises = exercises || [];

      results.totalCalsOut = 0;
      results.exercises.forEach(function(exercise){
        totalCalsOut += exercise.calBurn;
      });
      //find number of days in range, multiply by bmr, add to ccals out
      var diff =  Math.floor((Date.parse(body.endDate) - Date.parse(body.startDate)) / 86400000);
      console.log('DATE.PARSE', Date.parse(body.endDate));
      console.log('DATE.PARSEstsart', Date.parse(body.startDate));

      console.log('diff', diff);

      totalCalsOut = (diff * user.bmr);
      results.totalCalsOut = totalCalsOut;
      results.totalCalsIn = totalCalsIn;
      results.startDate = body.startDate;
      results.endDate = body.endDate;


      cb(null, results);
    });
  });
};













module.exports = User;
