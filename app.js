'use strict';

angular.module('IRCTCApp', [
    'ngRoute',
    'searchStationPage',
    'searchBar',
    'searchStation',
    'getPNRStatus',
    'getPNRStatusPage',

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
        controller : 'PnrStatusCtrl'
    })
    .when("/searchTrain", {
        templateUrl : 'pages/searchTrainPage/searchTrainPage.html',
        controller : 'TrainNameCtrl'
    })
    .when("/getTrainSchedule", {
        templateUrl : 'pages/getTrainSchedulePage/getTrainSchedulePage.html',
        controller : 'TrainScheduleCtrl'
    })
    .otherwise({
        redirectTo: '/'  // Optional: Default route for unknown paths
    });
});