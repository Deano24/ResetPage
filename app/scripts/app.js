'use strict';

/**
 * @ngdoc overview
 * @name resetApp
 * @description
 * # resetApp
 *
 * Main module of the application.
 */
angular
  .module('resetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oitozero.ngSweetAlert'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/reset.html',
        controller: 'ResetPasswordCtrl',
        controllerAs: 'reset'
      });
  });
