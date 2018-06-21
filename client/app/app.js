'use strict';

angular.module('pruebaSaintApp', ['pruebaSaintApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router','ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
