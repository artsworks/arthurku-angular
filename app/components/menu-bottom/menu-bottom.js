'use strict';

angular.module('aku.menu-bottom', [])
    .directive('menuBottom', function () {
        return {
            restrict: "E",
            scope: true,
            replace: true,
            templateUrl: "components/menu-bottom/menu-bottom.html",
            controller: "MenuBottomCtrl"
        }
    })
    .controller('MenuBottomCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.items = [
            {name: 'Home', icon: 'home'},
            {name: 'About', icon: 'account_circle'},
            {name: 'Portfolio', icon: 'assignment'},
            {name: 'Contact', icon: 'mail'}
        ];
        $scope.goTo = function (where) {
            $location.path('/' + where.toLowerCase());
        };
    }]);