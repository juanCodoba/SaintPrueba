'use strict';

(function(){

class SubprocesoCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pruebaSaintApp')
  .component('subprocesoCreate', {
    templateUrl: 'app/subproceso-create/subproceso-create.html',
    controller: SubprocesoCreateComponent,
    controllerAs: 'subprocesoCreateCtrl'
  });

})();
