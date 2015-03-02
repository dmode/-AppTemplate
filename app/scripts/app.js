'use strict';

/**
 * @ngdoc overview
 * @name appTemplateApp
 * @description
 * # appTemplateApp
 *
 * Main module of the application.
 */
angular
  .module('appTemplateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home' , {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
      });

    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });

    $stateProvider
      .state('customer', {
      url: '/customer',
      templateUrl: 'views/customer.html',
      controller: 'CustomerCtrl'
      })
      .state('customer.detail', {
        url: '/detail/:id',
        templateUrl: 'views/customer.detail.html',
        controller: 'CustomerDetailCtrl'
      })
      .state('customer.edit', {
        url: '/edit/:id',
        templateUrl: 'views/customer.Edit.html',
        controller: 'CustomerEditCtrl'
      });



  }).run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
