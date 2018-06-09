/**
 * Main module of the application.
 */

'use strict';

angular.module('sloogle', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            templateUrl: '/public/views/config.html',
            url: '/',
            controller: 'ConfigCtrl',
        });
});