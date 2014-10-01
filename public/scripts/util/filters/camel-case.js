/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Util')
    .filter('camelCase', [

      function () {
        return function (input) {
          if (input) {
            input = input.trim().toLowerCase();
            // replace any space and the first word character by the same character in upper case
            input = input.replace(/ (\w)/g, function (match, letter) {
              return letter.toUpperCase();
            });
          }

          return input;
        };
      }
    ]);
})();
