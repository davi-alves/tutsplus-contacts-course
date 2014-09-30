/*global angular*/
(function() {
  'use strict';

  angular.module('ContactsApp.List')
    .controller('ListCtrl', [
      '$scope', 'Contact',
      function($scope, Contact) {
        $scope.contacts = Contact.query();
        $scope.fields = ['firstName', 'lastName'];

        $scope.sort = function(field) {
          $scope.sort.field = field;
          $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;
  }]);
})();
