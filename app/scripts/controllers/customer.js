'use strict';

/**
 * @ngdoc function
 * @name appTemplateApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the appTemplateApp
 */
angular.module('appTemplateApp')
  .controller('CustomerCtrl', function ($rootScope, $scope, pouchdb, $log) {


    $scope.loadData = function () {
      $scope.daten = {};

      pouchdb.allDocs({include_docs: true, attachments: true}).then(function(response) {
        $rootScope.$apply(function() {
          $scope.daten = response.rows;
          $log.debug(response);
        });
      }).catch(function(err){
        $log.error(err);
      });


    };


    $scope.loadData();

  });
