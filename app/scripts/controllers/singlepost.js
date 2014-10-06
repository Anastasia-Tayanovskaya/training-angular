'use strict';

/**
 * @ngdoc function
 * @name trainingAngularApp.controller:SinglepostCtrl
 * @description
 * # SinglepostCtrl
 * Controller of the trainingAngularApp
 */
angular.module('trainingAngularApp')
  .controller('SinglepostCtrl', ['$scope', '$routeParams', 'singlePostFactory', 'Postsservice', function ($scope, $routeParams, singlePostFactory, Postsservice) {

	if (!singlePostFactory._id) {
		Postsservice.getPost($routeParams.postId)
			.then(function(post){
				$scope.singleArticle = post;
			});
	}
	else {
		$scope.singleArticle = {
			title: singlePostFactory.title,
			author: singlePostFactory.author,
			body: singlePostFactory.body || singlePostFactory.text,
			date: singlePostFactory.date,
			image: singlePostFactory.image
		};
	}	
  }]);
