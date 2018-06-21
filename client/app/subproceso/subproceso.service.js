(function(){
    'use strict';
    angular.module('pruebaSaintApp')
    .factory('subprocesoService',subprocesoService);
    subprocesoService.inject =["resource","API"];
    
    function subprocesoService($resource,API){
        return $resource(API + "/api/subproceso/:id",{
            id:'@id'
        });
    }
 })();