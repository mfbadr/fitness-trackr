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
      var date = {startDate:$scope.startDate, endDate:$scope.endDate};
      User.getResults(date).then(function(results){
        $scope.results = results.data;
        debugger;
      });
    };

  }]);
})();

