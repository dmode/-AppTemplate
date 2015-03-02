'use strict';

angular.module('appTemplateApp')
  .factory('pouchdb', function () {
    PouchDB.enableAllDbs = true;
    return new PouchDB('appTemplateCustomers');
  });

