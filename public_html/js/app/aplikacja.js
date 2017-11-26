'use strict';

var app = angular.module('app', ['ngRoute', 'kontroler', 'ngMessages', 'ngMeta', 'ngSanitize']);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', 'ngMetaProvider', function ($routeProvider, $locationProvider, $httpProvider, ngMetaProvider) {

        $routeProvider
            .when('/glowna', {
                templateUrl: 'partials/glowna.html',
                className: 'body-glowna'
            })

        .when('/omnie', {
            templateUrl: 'partials/omnie.html',
            className: 'body-omnie',
            meta: {
                title: 'O mnie i Współpraca',
            }
        })

        .when('/umiejetnosci', {
            templateUrl: 'partials/umiejetnosci.html',
            className: 'body-umiejetnosci',
            meta: {
                title: 'Umiejętności: html5, css3, less, bootstrap, angularjs, php, mysql, javascript, jquery',
            }
        })

        .when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
            className: 'body-portfolio',
            meta: {
                title: 'Portfolio',
            }
        })

        .when('/kontakt', {
            templateUrl: 'partials/kontakt.html',
            className: 'body-kontakt',
            meta: {
                title: 'Kontakt: lukasz@rojewski.eu',
            }
        })

        .otherwise({
            redirectTo: '/glowna'
        });

        ngMetaProvider.useTitleSuffix(true);
        ngMetaProvider.setDefaultTitle('Łukasz Rojewski - Front-End Developer');
        ngMetaProvider.setDefaultTitleSuffix(' | www.rojewski.eu');

        $locationProvider.html5Mode(true);

	}])
    .run(function (ngMeta) {
        ngMeta.init();
    });
