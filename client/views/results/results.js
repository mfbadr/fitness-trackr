(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('ResultsCtrl', ['$scope', 'Results', function($scope, Results){
    $scope.title = 'Your results';

  }]);
})();

