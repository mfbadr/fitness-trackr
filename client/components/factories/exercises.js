(function(){
  'use strict';

  angular.module('fitness-trackr')
  .factory('Exercise', ['$http', function($http){

    function addExercise(){
      return $http.get('/home');
    }

    return {addExercise:addExercise};
  }]);
})();

