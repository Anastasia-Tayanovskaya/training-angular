'use strict';

/**
 * @ngdoc service
 * @name trainingAngularApp.Postsservice
 * @description
 * # Postsservice
 * Service in the trainingAngularApp.
 */

angular.module('trainingAngularApp')
  .service('Postsservice', ['$q', 'PostFactory', function Postsservice($q, PostFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	return {
		getPosts: function() {
			var deferred = $q.defer(),
				posts;
							   
			posts = PostFactory.query(function(){
				deferred.resolve(posts);
			});
			
			return deferred.promise;
		},
		getPost: function(id) {
			var deferred = $q.defer(),
				post;
				
			post = PostFactory.get({_id: id}, function() {
				deferred.resolve(post);
			});
			
			return deferred.promise;
		},
		removePost: function(id) {
			var deferred = $q.defer();
			
			var post = PostFactory.remove({_id: id}, function(){
				deferred.resolve(post);
			});
			
			return deferred.promise;			
		},
		addPost: function(postObj) {
			var deferred = $q.defer();
			
			var post = PostFactory.save(postObj, function(){
				deferred.resolve(post);
			});
			
			return deferred.promise;
		},
		updatePost: function(id, postObj) {
			var deferred = $q.defer();
			
			var post = PostFactory.update({_id: id}, postObj, function(){
				deferred.resolve(post);
			});
			
			return deferred.promise;
		}
	}
}]);
