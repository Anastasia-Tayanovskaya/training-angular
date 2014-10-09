'use strict';

/**
 * @ngdoc directive
 * @name trainingAngularApp.directive:blogPost
 * @description
 * # blogPost
 */
angular.module('trainingAngularApp')
  .directive('blogPost', function () {
    return {
      templateUrl: '../../views/post.html',
      restrict: 'E'
    };
  });
