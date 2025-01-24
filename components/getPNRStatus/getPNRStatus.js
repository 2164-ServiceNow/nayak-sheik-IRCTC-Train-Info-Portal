angular.module('getPnrStatus', [])
.component('getPnrStatus', {
    templateUrl: 'components/getPnrStatus/getPnrStatus.html',
    controller: function($scope, $http, searchBarService) {
        $scope.pnrStatus = {};  // Initialize as an empty object to store response data
        $scope.searchValue = '';

        // Watch for changes in the search bar query
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery) {
                $scope.searchValue = newQuery; // Track the current query

                // Define the headers for the request
                const myHeaders = {
                    "x-apihub-key": "asWEaLJmfOcoPdY5sZsFSnYTN6SKs6pgn6VRisM-znswtVzCfL",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "941600b8-85da-484b-ae57-b33b7035182b"
                };

                // Make the GET request to fetch the PNR status
                $http({
                    method: "GET",
                    url: `https://IRCTC.proxy-production.allthingsdev.co/api/v3/getPNRStatus?pnrNumber=${newQuery}`,
                    params: { query: newQuery }, // Send the query as a parameter
                    headers: myHeaders
                }).then((response) => {
                    console.log("API Response:", response.data);
                    // Update pnrStatus with the data from response
                    if (response.data && response.data.data) {
                        $scope.pnrStatus = response.data.data; // Assign only the data object
                    } else {
                        $scope.pnrStatus = {}; // Reset if no data
                    }
                }).catch((error) => {
                    console.error("Error fetching PNR status:", error); // Handle errors
                    $scope.pnrStatus = {}; // Reset on error
                });
            }
        });
    }
});
