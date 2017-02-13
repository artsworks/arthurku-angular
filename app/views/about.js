'use strict';

angular.module('aku.about', [])
    .controller('AboutCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openSideMenu = function () {
            $mdSidenav('right').toggle();
        };

        $scope.skills = [
            {
                name: 'HTML',
                level: [1, 2, 3, 4, 5]
            },
            {
                name: 'JS',
                level: [1, 2, 3, 4, 5]
            },
            {
                name: 'CSS',
                level: [1, 2, 3, 4]
            },
            {
                name: 'Ember JS',
                level: [1, 2]
            },
            {
                name: 'Angular JS',
                level: [1, 2, 3, 4]
            },
            {
                name: 'PHP',
                level: [1, 2, 3]
            },
            {
                name: 'MySQL',
                level: [1, 2, 3]
            },
            {
                name: 'Security',
                level: [1, 2]
            }
        ];

        $scope.portfolios = [
            {
                title: 'Keno',
                subtitle: 'Tabcorp Digital',
                url: 'https://keno.com.au/',
                avatar: 'https://keno.com.au/favicon.ico',
                thumb: 'https://api.thumbalizr.com/?url=keno.com.au&api_key=&width=75&quality=80&encoding=jpg',
                content: 'Keno is a subsidiary of Tabcorp Group, fun and easy to play random number game played every 3 minutes.'
            },
            {
                title: 'Unikrn',
                subtitle: 'Tabcorp Wagering Technology',
                url: 'https://unikrn.com',
                avatar: 'https://unikrn.com/1458153016198/assets/favicon.ico',
                thumb: 'https://api.thumbalizr.com/?url=unikrn.com&api_key=&width=75&quality=80&encoding=jpg',
                content: 'Unikrn is an US-based betting website specialized in e-Sport betting build using AngularJS Framework.'
            },
            {
                title: 'Luxbet Lite Site',
                subtitle: 'Tabcorp Wagering Technology',
                url: 'https://m.luxbet.com',
                avatar: 'https://m.luxbet.com/images/luxbet-touch-icon-57x57-precomposed.png',
                thumb: 'https://api.thumbalizr.com/?url=m.luxbet.com&api_key=&width=75&quality=80&encoding=jpg',
                content: 'Luxbet is an Australian-based betting website build using EmberJS Framework.'
            },
            {
                title: 'Macworld Australia',
                subtitle: 'Niche Media',
                url: 'http://www.macworld.com.au/',
                avatar: 'http://www.macworld.com.au/favicon57x57.png',
                thumb: 'https://api.thumbalizr.com/?url=macworld.com.au&api_key=&width=75&quality=80&encoding=jpg',
                content: 'Macworld Australia is an online digital presence of Macworld Australia Magazine published by Niche Media.'
            },
            {
                title: 'Marketing Magazine',
                subtitle: 'Niche Media',
                url: 'https://www.marketingmag.com.au/',
                avatar: 'https://www.marketingmag.com.au/wp-content/themes/primetime-child/favicon.ico',
                thumb: 'https://api.thumbalizr.com/?url=marketingmag.com.au&api_key=&width=75&quality=80&encoding=jpg',
                content: 'Marketing Mag is an online digital presence of Marketing Magazine published by Niche Media.'
            },
            {
                title: 'Welcome-To Series',
                subtitle: 'Niche Media',
                url: 'http://welcome-to.com/',
                avatar: 'http://niche.com.au/wp-content/themes/niche2014/favicon.ico',
                thumb: 'https://api.thumbalizr.com/?url=welcome-to.com&api_key=&width=75&quality=80&encoding=jpg',
                content: 'Welcome-To is an online digital presence of Welcome-To Series Magazine published by Niche Media.'
            }
        ];
    }]);