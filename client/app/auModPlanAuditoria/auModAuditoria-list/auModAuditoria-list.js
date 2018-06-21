'use strict';

angular.module('pruebaSaintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auModAuditoria-list', {
        url: '/auModAuditoria-list',
        template: '<au-mod-auditoria-list></au-mod-auditoria-list>'
      });
  });
