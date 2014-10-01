/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Util')
    .directive('formField', [
      '$timeout', 'FieldTypes',
      function ($timeout, FieldTypes) {
        return {
          restrict: 'E',
          templateUrl: 'views/util/form-field.html',
          replace: true,
          scope: {
            record: '=',
            field: '@',
            live: '@',
            required: '@',
          },
          link: function ($scope) {
            $scope.types = FieldTypes;

            $scope.$on('record:invalid', function () {
              $scope[$scope.field].$setDirty();
            });

            $scope.remove = function (field) {
              delete $scope.record[field];
              $scope.blurUpdate();
            };

            $scope.blurUpdate = function () {
              if ($scope.live !== 'false') {
                $scope.record.$update(function (updatedRecord) {
                  $scope.record = updatedRecord;
                });
              }
            };

            var saveTimout;
            $scope.update = function () {
              $timeout.cancel(saveTimout);
              saveTimout = $timeout($scope.blurUpdate, 1000);
            };
          }
        };
      }
    ]);
})();
