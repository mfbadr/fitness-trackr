(function(){
  'use strict';

  angular.module('fitness-trackr')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function user(){
      return $http.get('/user');
    }

    function update(obj){
      return $http.post('/profile', obj);
    }

    function getResults(date){
      return $http.put('/results', date);
    }

    return {register:register, login:login, logout:logout, user:user, update:update, getResults:getResults};
  }]);
})();

