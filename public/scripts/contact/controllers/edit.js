/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact')
    .controller('EditCtrl', [
      '$scope', 'Contact', '$location', '$routeParams',
      function ($scope, Contact, $location, $routeParams) {
        $scope.contact = Contact.get({
          id: parseInt($routeParams.id, 10)
        });

        $scope.back = function () {
          $location.url('/contacts');
        };

        $scope.delete = function () {
          $scope.contact.$delete();
          $scope.back();
        };
      }
    ]);
})();
