'use strict';

describe('Service: Postsservice', function () {

  // load the service's module
  beforeEach(module('trainingAngularApp'));

  // instantiate service
  var Postsservice;
  beforeEach(inject(function (_Postsservice_) {
    Postsservice = _Postsservice_;
  }));

  it('should do something', function () {
    expect(!!Postsservice).toBe(true);
  });

});
