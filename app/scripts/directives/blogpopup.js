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
		restrict: 'E',
		replace: true,
		templateUrl: '../../views/popup.html'
    };
  });
