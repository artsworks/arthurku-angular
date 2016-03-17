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
        'aku.about',
        'aku.portfolio',
        'aku.contact'
    ])

    // app router
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        });

        $routeProvider.when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'PortfolioCtrl'
        });

        $routeProvider.when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);