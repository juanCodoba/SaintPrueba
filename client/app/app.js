'use strict';

angular.module('pruebaSaintApp', ['pruebaSaintApp.constants', 
'ngCookies', 
'ngResource',
'ngSanitize',
'ui.router',
'ngMaterial'
  ])


  .constant("API","http://localhost:8080/puebaCfipSaint")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
