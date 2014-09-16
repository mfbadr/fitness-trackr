(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){
    $scope.title = 'Edit Your Profile';

    $scope.addExercise = function(){};
  }]);
})();

