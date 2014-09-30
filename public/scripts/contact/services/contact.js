/*global angular*/
(function() {
  'use strict';

  angular.module('ContactsApp.Contact')
    .factory('Contact', [
      '$resource',
      function($resource) {
        return $resource('/api/contacts/:id', {
          id: '@id'
        }, {
          'update': {
            method: 'PUT'
          }
        });
      }
   ]);
})();
