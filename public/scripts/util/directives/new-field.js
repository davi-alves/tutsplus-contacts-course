/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Util')
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
          require: '^form',
          link: function ($scope, element, attr, form) {
            $scope.types = FieldTypes;
            $scope.field = {};

            $scope.show = function (type) {
              $scope.field.type = type;
              $scope.display = true;
            };

            $scope.remove = function () {
              $scope.field = {};
              $scope.display = false;
            };

            $scope.add = function () {
              if (form.newField.$valid) {
                $scope.record[$filter('camelCase')($scope.field.name)] = [$scope.field.value, $scope.field.type];
                $scope.remove();

                if ($scope.live !== 'false') {
                  $scope.record.$update(function (updatedRecord) {
                    $scope.record = updatedRecord;
                  });
                }
              }
            };
          }
        };
      }
    ]);
})();
