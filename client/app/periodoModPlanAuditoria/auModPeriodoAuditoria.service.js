(function(){
    'use strict';
    angular.module('pruebaSaintApp')
    .factory('auModPeriodoAuditoriaService',auModPeriodoAuditoriaService);
    auModPeriodoAuditoriaService.inject =["resource","API"];
    
    function auModPeriodoAuditoriaService($resource,API){
        return $resource(API + "/api/periodo_auditoria:id",{
            id:'@id'
        });
    }
 })();