'use strict';

angular.module('IRCTCApp', [
    'ngRoute',
    'searchStationPage',
    'searchBar',
    'searchStation',
    'getPNRStatus',
    'getPNRStatusPage',
<<<<<<< HEAD
    'searchTrain',
    'searchTrainPage',
    'getTrainSchedule',
    'getTrainSchedulePage'
=======
    'seatAvailibility'
>>>>>>> 36cc101be18ed46b32fca6fdd2f5c49f5f784451
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
    .otherwise({
        redirectTo: '/'  // Optional: Default route for unknown paths
    });
});