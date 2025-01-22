'use strict';

angular.module('IRCTCApp', [
    'ngRoute',
    'searchStationPage',
    'searchBar',
    'searchStation',
    'getPNRStatus',
    'getPNRStatusPage',
    'searchTrain',
    'searchTrainPage',
    'getTrainSchedule',
    'getTrainSchedulePage',
    'seatAvailibility',
    'seatAvailibilityPage',
    'getTrainsByStation',
    'getTrainsByStation'
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
    .when("/seatAvailibility",{
        templateUrl:'pages/seatAvailibilityPage/seatAvailibilityPage.html',
        controller:'AvailableSeatsCtrl'
    })
    .when("/getTrainsByStation",{
        templateUrl:'pages/searchStationPage/searchStationPage.html',
        controller:'StationNameCtrl'
    })
    .otherwise({
        redirectTo: '/'  // Optional: Default route for unknown paths
    });
});