angular.module('getPNRStatus', [])
.component('getPNRStatus', {
    templateUrl: 'components/getPNRStatus/getPNRStatus.html',
    controller: function($scope, $http, searchBarService) {
        $scope.pnrStatus = "";
        
        // Watch for changes in the search bar query
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery) {
                console.log("New Query:", newQuery); // Debug log
                $scope.searchValue = newQuery; // Track the current query

                // Define the headers for the request
                const myHeaders = {
                    "x-apihub-key": "tj7VDBgHG6-pFQSFngyHEi5pyaK9fE7Dr9y3O1ErWfywyY0CuW",
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
                    console.log("API Response:", response);
                    $scope.pnrStatus = response.data; // Update the pnrStatus with the response data
                }).catch((error) => {
                    console.error("Error fetching PNR status:", error); // Handle any errors
                });
            }
        });        
    }
});
