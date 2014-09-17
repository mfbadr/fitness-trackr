(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('FoodCtrl', ['$scope', 'Food', function($scope, Food){
    $scope.food = {};
    $scope.foods = [];

    $scope.addFood = function(){
      Food.create($scope.food).then(function(response){
        console.log($scope.food);
        $scope.foods.push(response.data.food);
        $scope.food = {};
        toastr.success('You successfully added food!');
      });
    };

  }]);
})();
