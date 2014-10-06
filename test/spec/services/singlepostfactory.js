'use strict';

describe('Service: singlePostFactory', function () {

  // load the service's module
  beforeEach(module('trainingAngularApp'));

  // instantiate service
  var singlePostFactory;
  beforeEach(inject(function (_singlePostFactory_) {
    singlePostFactory = _singlePostFactory_;
  }));

  it('should do something', function () {
    expect(!!singlePostFactory).toBe(true);
  });

});
