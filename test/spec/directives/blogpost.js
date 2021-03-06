'use strict';

describe('Directive: blogPost', function () {

  // load the directive's module
  beforeEach(module('trainingAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<blog-post></blog-post>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the blogPost directive');
  }));
});
