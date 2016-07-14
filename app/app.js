'use strict';

// app module
angular.module('aku', [
        'ngRoute',
        'ngAria',
        'ngMaterial',

        // components
        'aku.sidebar',
        'aku.menu-bottom',

        // views
        'aku.home',
        'aku.about'
    ])

    // app router
    .config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/home'});

        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'default': '900'
            });
    }]);