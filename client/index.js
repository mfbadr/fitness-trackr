(function(){
  'use strict';

  angular.module('fitness-trackr', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'LoginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'LogoutCtrl'})
    .when('/exercises', {templateUrl:'/views/exercises/exercises.html', controller:'ExercisesCtrl'})
    .when('/profile', {templateUrl:'/views/profile/profile.html', controller:'ProfileCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'fitness-trackr', storeName:'cache', version:1.0});
  }]);
})();
