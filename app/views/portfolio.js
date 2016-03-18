'use strict';

angular.module('aku.portfolio', [])
    .controller('PortfolioCtrl', ['$scope', function ($scope) {
        $scope.portfolios = [
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
                content: 'Luxbet is an AU-based betting website build using EmberJS Framework.'
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