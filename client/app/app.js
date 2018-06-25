'use strict';


angular.module('pruebaSaintApp', ['pruebaSaintApp.constants', 
'ngCookies', 
'ngResource',
'ngSanitize',
'ui.router',
'ngMaterial',
'ngMessages',



  ])


  .constant("API","http://localhost:8080/puebaCfipSaint")
  .config(function($urlRouterProvider, $locationProvider, $authProvider,API) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $authProvider.loginUrl = API + '/api/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPredix = 'pruebaSaint';

  });
