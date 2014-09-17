(function(){
  'use strict';

  angular.module('fitness-trackr')
  .factory('Results', ['$http', function($http){

    function addExercise(){
      return $http.get('/home');
    }

    return {addExercise:addExercise};
  }]);
})();

