'use strict';

angular.module('IRCTCApp', [
    'ngRoute',
    'searchStationPage',
    'searchBar',
    'searchStation'
])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "pages/main.html"
    })
    .when("/searchStation", {
        templateUrl: 'pages/searchStationPage/searchStationPage.html',
        controller: 'StationNameCtrl'  // Ensure correct controller name with proper case
    });

    // If you're running on a development server, consider disabling HTML5 mode if there's an issue
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});