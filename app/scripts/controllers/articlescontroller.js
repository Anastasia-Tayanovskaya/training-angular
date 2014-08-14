'use strict';

/**
 * @ngdoc function
 * @name trainingAngularApp.controller:ArticlescontrollerCtrl
 * @description
 * # ArticlescontrollerCtrl
 * Controller of the trainingAngularApp
 */
 
 var jsonArticles = '{ \
	"articles": [{ \
		"title": "Blogotitle of blogopost about blogoflowers", \
		"author": "Hyperraccoon", \
		"image": "images/articles/article1.png",\
		"date": "22:58 Jan 01, 2014",\
		"introduction": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\
	},\
	{\
		"title": "Blogotitle about smth colorful",\
		"author": "Hyperraccoon",\
		"image": "images/articles/article2.png",\
		"date": "22:59 Jan 01, 2014",\
		"introduction": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\
	}]\
}'; 
 
angular.module('trainingAngularApp')
	.controller('ArticlesController', function($scope, $filter){

		$scope.articles = JSON.parse(jsonArticles).articles;
		$scope.newArticle = {};
		$scope.articleModal = $('#articleModal');
		
		$scope.openDialog = function() {
			$scope.articleModal.modal();
		}
		
		$scope.cancelDialog = function() {
			$scope.articleModal.modal('hide');
		}
		
		$scope.submitArticle = function() {
			$scope.articles.push({
				author: $scope.newArticle.author,
				title: $scope.newArticle.title,
				date: $filter('date')(new Date(), 'HH:mm MMM dd, yyyy'),
				introduction: $scope.newArticle.text,	
				image: $scope.newArticle.imageURL
			});
			$scope.articleModal.modal('hide');
			$scope.newArticle.author = '';
			$scope.newArticle.title = '';
			$scope.newArticle.text = '';
			$scope.newArticle.imageURL = '';
		}
	})
	
