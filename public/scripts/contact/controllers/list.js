/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact')
    .controller('ListCtrl', [
      '$scope', '$rootScope', 'Contact', '$location', 'options',
      function ($scope, $rootScope, Contact, $location, options) {
        $rootScope.PAGE = 'all';
        $scope.contacts = Contact.query();
        $scope.fields = ['firstName', 'lastName'].concat(options.displayed_fields);

        $scope.sort = function (field) {
          $scope.sort.field = field;
          $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;

        $scope.show = function (id) {
          $location.url('/contacts/' + id);
        };
  }]);
})();
