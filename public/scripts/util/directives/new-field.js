/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Utl')
    .directive('newField', [
      '$filter', 'FieldTypes',
      function ($filter, FieldTypes) {
        return {
          restrict: 'E',
          templateUrl: 'views/util/new-field.html',
          replace: true,
          scope: {
            record: '=',
            live: '@'
          },
          link: function ($scope) {
            $scope.types = FieldTypes;
          }
        };
      }
    ]);
})();
