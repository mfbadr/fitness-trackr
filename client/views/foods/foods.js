(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('FoodsCtrl', ['$scope', 'Food', function($scope, Food){
    $scope.food = {};
    $scope.foods = [];

    $scope.addFood = function(){
      Food.addFood($scope.food).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
        toastr.success('You successfully added food!');
      });
    };

  }]);
})();
