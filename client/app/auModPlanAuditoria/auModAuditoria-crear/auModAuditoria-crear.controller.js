'use strict';

(function () {

  class AuModAuditoriaCrearComponent {
    constructor(auModPlanAuditoriaService, auModPeriodoAuditoriaService, subprocesoService,procesoEvaluadoService,usuarioService, $state,$stateParams,  $element) {
      this.auModPlanAuditoriaService = auModPlanAuditoriaService;
      this.auModPeriodoAuditoriaService = auModPeriodoAuditoriaService;
      this.subprocesoService = subprocesoService;
      this.procesoEvaluadoService = procesoEvaluadoService;
      this.usuarioService = usuarioService;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.$element =  $element;
      this.searchTerm;
    }
    $onInit() {

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

        this.usuarioService.query().$promise
        .then(response => {
          this.usuario = response;
          console.log("usuarioService", this.usuario)
        })
    }

    createAud() {
      this.auModPlanAuditoriaService.save(this.planAuditoria).$promise
        .then(response => {
          this.planAuditoria = response;
          console.log('planAuditoria', response)
          alert('fue creado tu control De Auditoria')
        })
    }
    createAudSub() {
      this.procesoEvaluadoService.save(this.subproceso).$promise
        .then(response => {
          this.subproceso = response;
          console.log('planAuditoria', response)
          alert('fue creado tu control De Auditoria')
        })
    }

    clearSearchTerm = function() {
      $scope.searchTerm = '';
    };

  }
  AuModAuditoriaCrearComponent.inject = ['auModPlanAuditoriaService', 'auModPeriodoAuditoriaService','procesoEvaluadoService','usuarioService', '$state']
  angular.module('pruebaSaintApp')
    .component('auModAuditoriaCrear', {
      templateUrl: 'app/auModPlanAuditoria/auModAuditoria-crear/auModAuditoria-crear.html',
      controller: AuModAuditoriaCrearComponent,
      controllerAs: 'vm'
    });

})();
