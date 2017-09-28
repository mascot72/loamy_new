'use strict';

/**
 * @ngdoc overview
 * @name firstApp
 * @description
 * # firstApp
 *
 * Main module of the application.
 */
angular
    .module('firstApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl',
                controllerAs: 'todo'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/home/sujigood', {
                templateUrl: 'views/home/sujigood.html',
                controller: 'SujigoodCtrl',
                controllerAs: 'sujigood'
            })
            .otherwise({
                redirectTo: '/' 
            });
    });
