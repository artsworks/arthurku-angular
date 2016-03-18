'use strict';

angular.module('aku.about', [])
    .controller('AboutCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideMenu = function () {
            $mdSidenav('right').toggle();
        };

        $scope.skills = [
            {
                name: 'HTML',
                level: [1,2,3,4,5]
            },
            {
                name: 'JS',
                level: [1,2,3,4,5]
            },
            {
                name: 'CSS',
                level: [1,2,3,4]
            },
            {
                name: 'Ember JS',
                level: [1,2]
            },
            {
                name: 'Angular JS',
                level: [1,2,3]
            },
            {
                name: 'PHP',
                level: [1,2,3]
            },
            {
                name: 'MySQL',
                level: [1,2,3]
            },
            {
                name: 'Security',
                level: [1]
            }
        ];
    }]);