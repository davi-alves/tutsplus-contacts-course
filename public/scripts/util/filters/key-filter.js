/*global angular*/
(function() {
  'use strict';

  angular.module('ContactsApp.Util')
    .filter('keyFilter', function() {
      return function(obj, query) {
        var result = {};
        angular.forEach(obj, function(val, key) {
          if (query.indexOf(key) === -1) {
            result[key] = val;
          }
        });

        return result;
      };
    });
})();
