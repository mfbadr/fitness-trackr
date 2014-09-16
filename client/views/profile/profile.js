(function(){
  'use strict';

  angular.module('fitness-trackr')
  .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){
    $scope.title = 'Edit Your Profile';

    User.user().then(function(response){
      $scope.user = response.data.user;
    });


    $scope.editProfile = function(){
      $scope.user.bmr = $scope.user.gender === 'female' ? (655 + (4.35 * $scope.user.weight) + (4.7 * $scope.user.height) - (4.7 * $scope.user.age)) : (66 + (6.23 * $scope.user.weight) + (12.7 * $scope.user.height) - (6.8 * $scope.user.age));
      User.update($scope.user).then(success, failure);
      //debugger;
    };

    function success(response){
      toastr.success('You have updated your profile');
    }

    function failure(response){
      toastr.error('There was a problem updating your profile');
    }

  }]);
})();

