'use strict';

angular.module('aku.menu-top', [])
    .directive('menuTop', function () {
        return {
            restrict: "E",
            scope: true,
            replace: true,
            templateUrl: "components/menu-top.html",
            controller: "MenuTopCtrl"
        }
    })
    .controller('MenuTopCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {

    }]);