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
    
    service.post = function (imageID) {
        return $http({
            method: 'POST',
            url: '/api/config',
            data: "imageID=" + imageID,
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        });
        // return $http.post('/api/config');
    };

    return service;
});