'use strict';

/**
 * @ngdoc function
 * @name appTemplateApp.directive:ResponsiveHide
 * @description
 * # ResponsiveHide
 * Controller of the appTemplateApp
 */
angular.module('appTemplateApp')
  .directive('showXs', function ($state) {

    function link( $scope, element, attributes ) {
      if (attributes) {
        var urls = attributes.showXs.split('|');

        urls.forEach(function(item){
          if (item === $state.current.name) {
            element.hide();
          } else {
            element.show();
          }
        });

      }
    }

    return({
      link: link,
      restrict: 'A'
    });

  });
