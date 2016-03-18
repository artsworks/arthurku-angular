'use strict';

angular.module('aku.menu-bottom', [])
    .directive('menuBottom', function () {
        return {
            restrict: "E",
            scope: true,
            replace: true,
            templateUrl: "components/menu-bottom.html",
            controller: "MenuBottomCtrl"
        }
    })
    .controller('MenuBottomCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.items = [
            {name: 'Home', icon: 'home'},
            {name: 'About', icon: 'account_circle'},
            {name: 'Portfolio', icon: 'assignment'},
            {name: 'Contact', icon: 'mail'},
            {name: 'Hobby', icon: 'camera'}
        ];
        $scope.goTo = function (where) {
            if (where == 'Hobby') {
                $window.location.href = 'http://portraiture.arthurku.com/';
            }
            $location.path('/' + where.toLowerCase());
        };
    }]);