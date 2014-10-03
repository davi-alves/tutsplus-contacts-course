/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact')
    .controller('SettingsCtrl', [
      '$scope', '$rootScope', 'options', 'Fields',
      function ($scope, $rootScope, options, Fields) {
        $rootScope.PAGE = 'settings';

        $scope.allFields = [];
        $scope.fields = options.displayed_fields;

        Fields.headers().then(function (data) {
          $scope.allFields = data;
        });

        $scope.toggle = function (field) {
          var i = options.displayed_fields.indexOf(field);
          if (i > -1) {
            options.displayed_fields.splice(i, 1);
          } else {
            options.displayed_fields.push(field);
          }

          Fields.set(options.displayed_fields);
        };
  }]);
})();
