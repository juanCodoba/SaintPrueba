'use strict';

angular.module('pruebaSaintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auModAuditoria-update', {
        url: '/auModAuditoria-update',
        template: '<au-mod-auditoria-update></au-mod-auditoria-update>'
      });
  });
