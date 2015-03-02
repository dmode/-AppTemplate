'use strict';

/**
 * @ngdoc function
 * @name appTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTemplateApp
 */
angular.module('appTemplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
