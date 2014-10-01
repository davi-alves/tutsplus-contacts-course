/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp', [
    'ContactsApp.Contact',
    'ngRoute'
    ])
    .config(function ($locationProvider) {

      $locationProvider.html5Mode(true);
    });
})();
