/*global angular*/
(function() {
  'use strict';

  angular.module('ContactsApp', [
    'ContactsApp.List',
    'ngRoute'
    ])
    .config(function($locationProvider) {

      $locationProvider.html5Mode(true);
    });
})();
