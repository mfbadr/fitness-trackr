(function(){
  'use strict';

  angular.module('fitness-trackr')
  .factory('Exercise', ['$http', function($http){

    function addExercise(exercise){
      return $http.post('/exercises', exercise);
    }

    return {addExercise:addExercise};
  }]);
})();

