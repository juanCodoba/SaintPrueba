'use strict';

angular.module('pruebaSaintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('procesoEvaluado-create', {
        url: '/procesoEvaluado-create',
        template: '<proceso-evaluado-create></proceso-evaluado-create>'
      });
  });
