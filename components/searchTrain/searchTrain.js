angular.module('searchTrain', [])
.component('searchTrain', {
    templateUrl: 'components/searchTrain/searchTrain.html',
    controller: function($scope, $http, searchBarService) {
        $scope.searchTrains = []; // Initialize as an empty array
        $scope.searchValue = ''; // Initialize the search value

        // Watch for changes in the search query from the searchBarService
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery) {
                $scope.searchValue = newQuery;

                const myHeaders = {
                    "x-apihub-key": "tj7VDBgHG6-pFQSFngyHEi5pyaK9fE7Dr9y3O1ErWfywyY0CuW",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "1ab9fb95-234d-4cfd-8354-c3dc9f7ecb48"
                };

                // Check if the query is not empty before making the request
                if (newQuery.trim() !== "") {
                    $http({
                        method: "GET",
                        url: `https://IRCTC.proxy-production.allthingsdev.co/api/v1/searchTrain`,
                        params: { query: newQuery },
                        headers: myHeaders
                    }).then((response) => {
                        console.log("API Response:", response);
                        // Ensure response.data is assigned to searchTrains correctly
                        $scope.searchTrains = response.data || []; // Fallback to empty array if response is empty
                    }).catch((error) => {
                        console.error("Error fetching search Trains:", error);
                    });
                }
            } else {
                $scope.searchTrains = []; // Clear results if query is empty
            }
        });
    }
});
