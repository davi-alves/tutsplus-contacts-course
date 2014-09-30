/*global angular*/
(function() {
  'use strict';

  angular.module('ContactsApp.List', [
    'ContactsApp.Contact',
    'ngRoute'
    ])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/contacts', {
          controller: 'ListCtrl',
          templateUrl: 'views/list/list.html'
        });

      $locationProvider.html5Mode(true);
    });
})();
