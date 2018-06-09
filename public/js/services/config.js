/**
 * Example Service
 */

'use strict';

angular.module('sloogle').factory('ConfigService', function ($http) {
    var service = {};

    // CALL THE GET REQUEST FOR PICTURES HERE
    service.get = function () {
        return $http.get('/api/config');
    };

    return service;
});