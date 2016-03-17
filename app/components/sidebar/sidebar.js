'use strict';

angular.module('aku.sidebar', [])
    .directive('sidebar', function() {
        return {
            restrict: "E",
            scope: true,
            replace: true,
            templateUrl: "components/sidebar/sidebar.html",
            controller: "SideCtrl"
        }
    })
    .controller('SideCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.close = function () {
            $mdSidenav('right').close();
        };
    }]);