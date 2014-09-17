(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('ResultsCtrl', ['$scope', 'User', function($scope,User){
    $scope.title = 'Your results';

    User.user().then(function(response){
      $scope.user = response.data.user;
    });

    $scope.getResults = function(){
      //console.log($scope.startDate);
      User.results($scope.startDate, $scope.endDate).then(function(){
        debugger;
      });
    };

  }]);
})();

