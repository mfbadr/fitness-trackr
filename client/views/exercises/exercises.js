(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('ExercisesCtrl', ['$scope', 'Exercise', 'User', function($scope, Exercise, User){
    $scope.title = 'Add an exercise';


    User.user().then(function(response){
      $scope.user = response.data.user;
    });
    $scope.activities = [
      {type: 'bicycling', level:[{name: 'bicycling-leisure', met: 6}, {name: 'bicycling-moderate', met: 8}, {name: 'bicycling-vigorous', met: 10}]},
      {type: 'walking', level:[{name: 'walking-leisure', met: 3}, {name: 'walking-moderate', met: 4}, {name: 'walking-vigorous', met: 6}]},
      {type: 'running', level:[{name: 'running-leisure', met: 7}, {name: 'running-moderate', met: 10}, {name: 'running-vigorous', met: 14}]},
      {type: 'weights', level:[{name: 'weights-leisure', met: 3}, {name: 'weights-moderate', met: 5}, {name: 'weights-vigorous', met: 7}]},
      {type: 'yoga', level:[{name: 'yoga-leisure', met: 2.5}, {name: 'yoga-moderate', met: 3.0}, {name: 'yoga-vigorous', met: 3.5}]},
      {type: 'playing cards', level:[{name: 'playing cards-leisure', met: 1.2}, {name: 'playing cards-moderate', met: 1.5}, {name: 'playing cards-vigorous', met: 1.8}]},
      {type: 'watching football', level:[{name: 'watching football-leisure', met: 1.0}, {name: 'watching football-moderate', met: 1.5}, {name: 'watching football-vigorous', met: 2.0}]},
      {type: 'sex', level:[{name: 'sex-leisure', met: 1.5}, {name: 'sex-moderate', met: 2.0}, {name: 'sex-vigorous', met: 2.5}]}
    ];

    $scope.activity = {};
    $scope.exercise = {};
    $scope.exercises = [];

    $scope.addExercise = function(){
      Exercise.addExercise($scope.exercise).then(function(response){
        $scope.exercises.push(response.data.exercise);
        $scope.exercise = {};
        $scope.activity = {};
        toastr.success('You successfully added an exersize!');
      });
    };

  }]);
})();

