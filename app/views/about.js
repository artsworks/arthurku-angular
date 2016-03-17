'use strict';

angular.module('aku.about', [])
    .controller('AboutCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideMenu = function () {
            $mdSidenav('right').toggle();
        };
    }]);