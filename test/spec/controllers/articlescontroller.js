'use strict';

describe('Controller: ArticlescontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('trainingAngularApp'));

  var ArticlescontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlescontrollerCtrl = $controller('ArticlescontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
