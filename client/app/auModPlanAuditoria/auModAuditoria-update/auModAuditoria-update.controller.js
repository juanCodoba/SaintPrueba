'use strict';

(function(){

class AuModAuditoriaUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pruebaSaintApp')
  .component('auModAuditoriaUpdate', {
    templateUrl: 'app/auModPlanAuditoria/auModAuditoria-update/auModAuditoria-update.html',
    controller: AuModAuditoriaUpdateComponent,
    controllerAs: 'auModAuditoriaUpdateCtrl'
  });

})();
