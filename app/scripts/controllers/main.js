'use strict';

/**
 * @ngdoc function
 * @name trainingAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingAngularApp
 */
angular.module('trainingAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
