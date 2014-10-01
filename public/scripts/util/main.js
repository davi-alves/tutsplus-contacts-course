/*global angular*/
(function () {
  'use strict';

  angular.module('ContactsApp.Util', [])
  // Field Types
  .value('FieldTypes', {
    text: ['Text', 'should be a text'],
    email: ['Email', 'should be an email address'],
    number: ['Number', 'should be a number'],
    date: ['Date', 'should be a date'],
    datetime: ['Datetime', 'should be a datetime'],
    time: ['Time', 'should be a time'],
    month: ['Month', 'should be a month'],
    week: ['Week', 'should be a week'],
    url: ['Url', 'should be a URL'],
    tel: ['Tel', 'should be a phone number'],
    color: ['Color', 'should be a color'],
  });
})();
