/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact')
    .controller('NewCtrl', [
      '$scope', 'Contact', '$location',
      function ($scope, Contact, $location) {
        $scope.contact = new Contact({
          firstName: ['', 'text'],
          lastName: ['', 'text'],
          email: ['', 'email'],
          homePhone: ['', 'tel'],
          cellPhone: ['', 'tel'],
          birthDate: ['', 'date'],
          website: ['', 'url'],
          adress: ['', 'text']
        });

        $scope.save = function () {
          if ($scope.newContact.$invalid) {
            $scope.$broadcast('record:invalid');
          } else {
            $scope.contact.$save();
            $location.url('/contacts');
          }
        };
      }
    ]);
})();
