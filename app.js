'use strict';

angular.module('IRCTCApp', [
    'ngRoute',
    'searchStationPage',
    'searchBar',
    'searchStation',
    'getPNRStatus',
    'getPNRStatusPage'
])

.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "pages/main.html"
    })
    .when("/searchStation", {
        templateUrl: 'pages/searchStationPage/searchStationPage.html',
        controller: 'StationNameCtrl'
    })
    .when("/getPNRStatus", {
        templateUrl : 'pages/getPNRStatusPage/getPNRStatusPage.html',
        controller : 'getPNRStatusCtrl'
    })
    .otherwise({
        redirectTo: '/'  // Optional: Default route for unknown paths
    });
});