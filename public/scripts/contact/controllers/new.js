/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Contact')
    .controller('NewCtrl', [
      '$scope', '$rootScope', 'Contact', '$location',
      function ($scope, $rootScope, Contact, $location) {
        $rootScope.PAGE = 'new';

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

        $scope.back = function () {
          $location.url('/contacts');
        };

        $scope.save = function () {
          if ($scope.newContact.$invalid) {
            $scope.$broadcast('record:invalid');
          } else {
            $scope.contact.$save();
            $scope.back();
          }
        };
      }
    ]);
})();
