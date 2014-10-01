'use strict';

/**
 * @ngdoc service
 * @name trainingAngularApp.PostFactory
 * @description
 * # PostFactory
 * Factory in the trainingAngularApp.
 */
angular.module('trainingAngularApp')
  .factory('PostFactory', function ($resource) {   
    var PostsRequest = $resource('http://54.72.3.96:3000/posts/:_id', {}, {
		update: {
			method: 'PUT'
		}
	});

    // Public API here
    return PostsRequest;
});
