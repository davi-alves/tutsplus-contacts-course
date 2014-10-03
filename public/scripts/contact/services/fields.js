/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact')
    .factory('Fields', [
      '$q', '$http', 'Contact',
      function ($q, $http, Contact) {
        var url = '/options/displayed_fields',
          ignore = ['firstName', 'lastName', 'id', 'userId'],
          allFields = [],
          deferred = $q.defer(),
          // create a variable to a $resouce that recieves a callback when it's loaded and then loop through it
          contacts = Contact.query(function () {
            contacts.forEach(function (c) {
              Object.keys(c).forEach(function (field) {
                if (ignore.indexOf(field) < 0 && allFields.indexOf(field) < 0) {
                  allFields.push(field);
                }
              });
            });
            deferred.resolve(allFields);
          });

        return {
          get: function () {
            return $http.get(url);
          },
          set: function (newFields) {
            return $http.post(url, {
              fields: newFields
            });
          },
          headers: function () {
            return deferred.promise;
          }
        };
      }
   ]);
})();
