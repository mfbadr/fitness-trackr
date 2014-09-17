(function(){
  'use strict';

  angular.module('fitness-trackr')
  .factory('Food', ['$http', function($http){

    function addFood(food){
      return $http.post('/foods', food);
    }
    return {addFood:addFood};
  }]);
})();

