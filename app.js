'use strict';

angular.module('IRCTCApp', [
    'ngRoute',
    'searchStationPage',
    'searchBar',
    'searchStation',
    'getPnrStatus',
    'getPnrStatusPage',
    'searchTrain',
    'searchTrainPage',
    'getTrainSchedule',
    'getTrainSchedulePage',
    'seatAvailibility',
    'seatAvailibilityPage',
    'getTrainsByStation',
    'getTrainsByStationPage',
    'getFare',
    'getFarePage',
    'getTrainClasses',
    'getTrainClassesPage'
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
    .when("/getPnrStatus", {
        templateUrl : 'pages/getPnrStatusPage/getPnrStatusPage.html',
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
        templateUrl:'pages/getTrainsByStationPage/getTrainsByStationPage.html',
        controller:'NameOfStationCtrl'
    })
    .when("/getFare",{
        templateUrl:'pages/getFarePage/getFarePage.html',
        controller:'FareCtrl'
    })
    .when("/getTrainClasses",{
        templateUrl:'pages/getTrainClassesPage/getTrainClassesPage.html',
        controller:'TrainClassesCtrl'
    })
    .otherwise({
        redirectTo: '/'  // Optional: Default route for unknown paths
    });
});