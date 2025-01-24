angular.module('getTrainsByStation', [])
.component('getTrainsByStation', {
    templateUrl: 'components/getTrainsByStation/getTrainsByStation.html',
    controller: function($scope, $http, searchBarService) {
        $scope.trainsByStations = { originating: [], passing: [], destination: [] };  // Initialize arrays
        $scope.searchValue = '';

        // Watch the query from the search bar service
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            console.log("Search query:", newQuery); // Log the new query value

            if (newQuery) {
                $scope.searchValue = newQuery;

                const myHeaders = {
                    "x-apihub-key": "Ka0pFSvDDlnHLZopyvMJTgZyjoAU02-5KHSQp4ene0G1FyVtto",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "5e8670a9-6bd1-4e9a-91e1-1a2f0882da65"
                };

                // Make the API request
                $http({
                    method: "GET",
                    url: `https://IRCTC.proxy-production.allthingsdev.co/api/v3/getTrainsByStation?stationCode=${newQuery}`,
                    params: { query: newQuery },
                    headers: myHeaders
                }).then((response) => {
                    console.log("Response Data:", response.data); // Log the response data

                    // Check if the response data contains 'originating', 'passing', or 'destination' arrays
                    if (response && response.data) {
                        $scope.trainsByStations.originating = response.data.originating || [];
                        $scope.trainsByStations.passing = response.data.passing || [];
                        $scope.trainsByStations.destination = response.data.destination || [];
                    } else {
                        console.error("Error: Missing train data.");
                    }
                }).catch((error) => {
                    console.error("Error fetching search stations:", error); // Log the error
                });
            }
        });
    }
});
