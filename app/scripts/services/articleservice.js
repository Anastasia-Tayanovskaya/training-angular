'use strict';

/**
 * @ngdoc service
 * @name trainingAngularApp.articleService
 * @description
 * # articleService
 * Service in the trainingAngularApp.
 */
angular.module('trainingAngularApp')
  .service('articleService', function articleData() {
    // AngularJS will instantiate a singleton by calling "new" on this function
	
	var articleData = {};
	
	return {
		getArticleData: function () {
			return articleData;
		},
		setArticleData: function(value) {
			articleData = value;
		}
	};
  });
