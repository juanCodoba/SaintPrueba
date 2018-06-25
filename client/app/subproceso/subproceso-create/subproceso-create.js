'use strict';

angular.module('pruebaSaintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subproceso-create', {
        url: '/subproceso-create',
        template: '<subproceso-create></subproceso-create>'
      });
  });
