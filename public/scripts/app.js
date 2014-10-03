/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp', [
    'ContactsApp.Contact',
    'ngRoute'
    ])
    .config([
      '$routeProvider', '$locationProvider',
      function ($routeProvider, $locationProvider) {
        $routeProvider
          .otherwise({
            redirectTo: '/contacts'
          });

        $locationProvider.html5Mode(true);
      }
    ]);
})();
