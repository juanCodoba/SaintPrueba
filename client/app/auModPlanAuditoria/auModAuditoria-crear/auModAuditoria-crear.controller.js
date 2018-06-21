'use strict';

(function () {

  class AuModAuditoriaCrearComponent {
    constructor(auModPlanAuditoriaService, auModPeriodoAuditoriaService, subprocesoService, $state) {
      this.auModPlanAuditoriaService = auModPlanAuditoriaService;
      this.auModPeriodoAuditoriaService = auModPeriodoAuditoriaService;
      this.subprocesoService = subprocesoService
      this.$state = $state;
    }
    $onInit() {
      this.auModPlanAuditoriaService.query().$promise
        .then(response => {
          this.planAuditoria = response;
          console.log("planes de auditoria", this.planAuditoria)
        })
      this.auModPeriodoAuditoriaService.query().$promise
        .then(response => {
          this.periodoAuditoria = response;
          console.log("periodos de auditoria", this.periodoAuditoria)
        })
        this.subprocesoService.query().$promise
        .then(response => {
          this.subproceso = response;
          console.log("periodos de auditoria", this.subproceso)
        })
    }

    createReserve() {
      this.auModPlanAuditoriaService.save(this.planAuditoria).$promise
        .then(response => {
          this.planAuditoria = response;
          console.log('planAuditoria', response)
          alert('fue creado tu control De Auditoria')
        })
    }



  }
  AuModAuditoriaCrearComponent.inject = ['auModPlanAuditoriaService', 'auModPeriodoAuditoriaService', '$state']
  angular.module('pruebaSaintApp')
    .component('auModAuditoriaCrear', {
      templateUrl: 'app/auModPlanAuditoria/auModAuditoria-crear/auModAuditoria-crear.html',
      controller: AuModAuditoriaCrearComponent,
      controllerAs: 'vm'
    });

})();
