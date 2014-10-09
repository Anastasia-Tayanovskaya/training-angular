'use strict';

/**
 * @ngdoc function
 * @name trainingAngularApp.controller:ArticlescontrollerCtrl
 * @description
 * # ArticlescontrollerCtrl
 * Controller of the trainingAngularApp
 */

angular.module('trainingAngularApp')
	.controller('ArticlesController', ['$scope', '$filter', 'Postsservice', 'singlePostFactory', 'TextFactory', function($scope, $filter, Postsservice, singlePostFactory, TextFactory){
		$scope.newArticle = {};
		$scope.formState = 'Submit';
		
		function showPosts() {
			Postsservice.getPosts().then(function(posts){
				$scope.articles = posts;
				for (var i = 0, len = $scope.articles.length; i < len; i++) {
					$scope.articles[i].truncatedText = ($scope.articles[i].text || $scope.articles[i].body) ? TextFactory.trucateText($scope.articles[i].text || $scope.articles[i].body, 100) : '';
				}
			});
		}
		
		function openDialog() {
			if (!$scope.articleModal) {
				$scope.articleModal = $('#articleModal');
				$scope.articleModal.modal();
			}
			$scope.articleModal.modal('show');
		}
		
		function clearNewArticle() {
			$scope.newArticle.author = '';
			$scope.newArticle.title = '';
			$scope.newArticle.body = '';
			$scope.newArticle.imageURL = '';
		}
		
		showPosts();

		$scope.createNewPost = function() {
			$scope.formState = 'Submit';
			
			openDialog();
		};		
		
		$scope.cancelDialog = function() {
			$scope.articleModal.modal('hide');
		};
		
		$scope.submitArticle = function() {
			var postObj = {
				author: $scope.newArticle.author,
				title: $scope.newArticle.title,
				date: $filter('date')(new Date(), 'HH:mm MMM dd, yyyy'),
				body: $scope.newArticle.body,	
				image: $scope.newArticle.imageURL
			};
			
			if ($scope.formState === 'Submit') {
				Postsservice.addPost(postObj)
					.then(function(){
						showPosts();
						
						clearNewArticle();
					});
			}
			else {			
				Postsservice.updatePost($scope.currentArticleId, $scope.newArticle)
					.then(function(){
						var element = $scope.articles.filter(function(element){
							return element._id === $scope.currentArticleId;
						})[0];	

						element.author = $scope.newArticle.author;
						element.title = $scope.newArticle.title;
						element.body = $scope.newArticle.body;
						element.imageURL = $scope.newArticle.imageURL;
						element.truncatedText = ($scope.newArticle.body) ? TextFactory.trucateText($scope.newArticle.body, 100) : '';
						
						clearNewArticle();
					});
			}
			
			$scope.articleModal.modal('hide');
		};
		
		$scope.editArticle = function(event) {
			event.preventDefault();
						
			$scope.formState = 'Edit';
			
			$scope.newArticle._id = this.article._id;
			$scope.newArticle.author = this.article.author;
			$scope.newArticle.title = this.article.title;
			$scope.newArticle.body = this.article.body;
			$scope.newArticle.imageURL = this.article.imageURL;
			
			$scope.currentArticleId = this.article._id;
			
			openDialog();			
		};
		
		$scope.removeArticle = function(event){
			event.preventDefault();
			Postsservice.removePost(this.article._id)
				.then(function(){
					showPosts();
				});
		};
		
		$scope.setArticleData = function() {
			for (var prop in this.article) {
				if (this.article.hasOwnProperty(prop)) {
					singlePostFactory[prop] = this.article[prop];
				}
			}			
		};
	}]);
	
