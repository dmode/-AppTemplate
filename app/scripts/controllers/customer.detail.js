'use strict';

/**
 * @ngdoc function
 * @name appTemplateApp.controller:CustomerDetailCtrl
 * @description
 * # CustomerDetailCtrl
 * Controller of the appTemplateApp
 */
angular.module('appTemplateApp')
  .controller('CustomerDetailCtrl', function ($scope, $stateParams) {
    $scope.message = 'Hallo Detail';
    $scope.companyId = $stateParams.companyId;

  });
