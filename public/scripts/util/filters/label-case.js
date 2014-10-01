/*global angular*/
(function() {
  'use strict';

  angular.module('ContactsApp.Util')
    .filter('labelCase', [

      function() {
        return function(input) {
          if (input) {
            input = input.replace(/([A-Z])/g, ' $1');
            input = input[0].toUpperCase() + input.slice(1);
          }

          return input;
        };
  }]);
})();
