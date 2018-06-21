'use strict';

describe('Component: AuModAuditoriaUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('pruebaSaintApp'));

  var AuModAuditoriaUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AuModAuditoriaUpdateComponent = $componentController('auModAuditoria-update', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
