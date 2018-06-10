'use strict';

angular.module('sloogle').factory('ImageService', function ($http) {
    var service = {};

    service.getApiKey = function () {
        return $http.get('/api/key/');
    };
    
    service.get = function (imageID) {
        return $http.get('/api/config/' + imageID);
    };
    
    service.post = function (imageID) {
        return $http({
            method: 'POST',
            url: '/api/config',
            data: "image_id=" + imageID,
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        });
    };

    return service;
});