'use strict';

angular.module('textManager', []); 
 
/**
 * @ngdoc overview
 * @name trainingAngularApp
 * @description
 * # trainingAngularApp
 *
 * Main module of the application.
 */
angular
  .module('trainingAngularApp', ['ngResource', 'ngRoute', 'textManager'])
  .config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/postlist.html',
			controller: 'ArticlesController'
		})
		.when('/singlepost/:postId', {
			templateUrl: 'views/singlepost.html',
			controller: 'SinglepostCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	}])
	.run(function ($rootScope, $location) {
		var history = [];

		$rootScope.$on('$routeChangeSuccess', function() {
			history.push($location.$$path);
		});

		$rootScope.back = function () {
			var prevUrl = history.length > 1 ? history.splice(-2)[0] : '/';
			$location.path(prevUrl);
		};
	});
