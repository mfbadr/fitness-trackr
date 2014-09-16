'use strict';

var User = require('../models/user');

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.status(200).end();
    }else{
      res.status(400).end();
    }
  });
};

exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
      req.session.regenerate(function(){
        req.session.userId = user._id;
        req.session.save(function(){
          res.setHeader('X-Authenticated-User', user.email);
          res.status(200).end();
        });
      });
    }else{
      res.status(401).end();
    }
  });
};

exports.user = function(req, res){
  res.send({user:req.user});
};

exports.logout = function(req, res){
  req.session.destroy(function(){
    res.setHeader('X-Authenticated-User', 'anonymous');
    res.status(200).end();
  });
};

exports.update = function(req, res){
  //console.log(User.update);
  User.update(req.body, req.user, function(err, writeResult){
    console.log('WRITERESULTS',writeResult);
    if(writeResult === 1){
      res.status(200).end();
    }else{
      res.status(418).end();
    }
  });
};
