'use strict';

angular.module('pruebaSaintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auModAuditoria-crear', {
        url: '/auModAuditoria-crear',
        template: '<au-mod-auditoria-crear></au-mod-auditoria-crear>'
      });
  });
