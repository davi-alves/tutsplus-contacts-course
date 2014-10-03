/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact', [
    'ngResource',
    'ContactsApp.Util',
    'ngRoute',
    'ngMessages'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/contacts', {
          controller: 'ListCtrl',
          templateUrl: 'views/contact/list.html'
        })
        .when('/contacts/new', {
          controller: 'NewCtrl',
          templateUrl: 'views/contact/new.html'
        })
        .when('/contacts/:id', {
          controller: 'EditCtrl',
          templateUrl: 'views/contact/edit.html'
        })
        .when('/settings', {
          controller: 'SettingsCtrl',
          templateUrl: 'views/contact/settings.html'
        });

      $locationProvider.html5Mode(true);
    })
    .value('options', {})
    .run(
      [
      'options', 'Fields',
      function (options, Fields) {
          Fields.get().success(function (data) {
            options.displayed_fields = data;
          });
      }
    ]);
})();
