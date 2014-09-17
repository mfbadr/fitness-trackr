'use strict';

var bcrypt = require('bcrypt'),
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

User.getResults = function(user, body){
  var results = {};
  require('./food').all(user, function(err, meals){
    results.means = meals;
    require('./food').all(user, function(err, meals){});
  });
};













module.exports = User;
