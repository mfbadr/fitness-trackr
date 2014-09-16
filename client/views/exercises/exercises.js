(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('ExercisesCtrl', ['$scope', 'Exercise', function($scope, Exercise){
    $scope.title = 'Add an exercise';

    $scope.addExercise = function(){};
  }]);
})();

