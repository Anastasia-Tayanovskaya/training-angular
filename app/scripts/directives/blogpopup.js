'use strict';

/**
 * @ngdoc directive
 * @name trainingAngularApp.directive:blogPopup
 * @description
 * # blogPopup
 */
angular.module('trainingAngularApp')
  .directive('blogPopup', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the blogPopup directive');
      }
    };
  });
