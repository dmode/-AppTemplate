'use strict';

/**
 * @ngdoc function
 * @name appTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTemplateApp
 */
angular.module('appTemplateApp')
  .controller('AboutCtrl', function ($scope, pouchdb) {

    $scope.message = '...';

    $scope.generateExampleData = function () {

      var customers = [
        {
          companyName: 'Meier AG',
          address: 'Bachstrasse 15',
          postalCode: '5000',
          city: 'Aarau',
          accounts: [
            '123456789', '1128847'
          ]
        },
        {
          companyName: 'Hans Müller Co.',
          address: 'Zurichberg 1',
          postalCode: '8012',
          city: 'Zürich',
          accounts: [
            '123456789', '1128847'
          ]
        },
        {
          companyName: 'KABA AG',
          address: 'Seestrasse 8',
          postalCode: '5024',
          city: 'Küttigen',
          accounts: [
            '123456789', '1128847'
          ]
        },
        {
          companyName: 'Pepe Weinhandel',
          address: 'Rebberg 900',
          postalCode: '1000',
          city: 'Genf',
          accounts: [
            '123456789', '1128847'
          ]
        },
        {
          companyName: 'Microsoft Schweiz AG',
          address: 'Hodlderbachstrasse 9',
          postalCode: '8080',
          city: 'Altstätten',
          accounts: [
            '123456789', '1128847'
          ]
        },
        {
          companyName: 'The Six Sense',
          address: 'BatManweg 8',
          postalCode: '9000',
          city: 'St. Gallen',
          accounts: [
            '123456789', '1128847'
          ]
        }
        ];

      customers.forEach(function (item) {
        console.log('save ' + item._id);
        pouchdb.post(item);

      });

      $scope.message = 'data added...';

    };

  });
