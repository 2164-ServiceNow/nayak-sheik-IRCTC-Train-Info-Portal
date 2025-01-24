angular.module('getTrainSchedule', [])
.component('getTrainSchedule', {
    templateUrl: 'components/getTrainSchedule/getTrainSchedule.html',
    controller: function($scope, $http, searchBarService) {
        // Initialize trainSchedule to store API response data
        $scope.trainSchedule = {}; 
        $scope.searchValue = ''; 

        // Clear previous search value when this component is initialized
        searchBarService.setQuery('');  // This will clear the search query in the search bar
        $scope.searchValue = '';  // Clear the local search input as well

        // Watch for changes in the query from searchBarService
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery && newQuery.trim() !== "") {
                // Update the search value when query changes
                $scope.searchValue = newQuery;

                // Define headers for the API request
                const myHeaders = {
                    "x-apihub-key": "asWEaLJmfOcoPdY5sZsFSnYTN6SKs6pgn6VRisM-znswtVzCfL",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "33ac12da-4889-4a47-b3da-c43b67d26c8e"
                };

                // Make API request only if the query is not empty
                $http({
                    method: "GET",
                    url: `https://IRCTC.proxy-production.allthingsdev.co/api/v1/getTrainSchedule?trainNo=${newQuery}`,
                    params: { query: newQuery },
                    headers: myHeaders
                }).then((response) => {
                    console.log("API Response:", response);

                    // Ensure we assign response data to the trainSchedule object
                    if (response.data && response.data.status === true) {
                        $scope.trainSchedule = response.data; // Assign the full response data
                    } else {
                        // Handle case where the API response is not as expected
                        $scope.trainSchedule = {};
                    }
                }).catch((error) => {
                    console.error("Error fetching train schedule:", error);
                    // Handle error case by clearing the train schedule data
                    $scope.trainSchedule = {};
                });
            } else {
                // Clear trainSchedule if query is empty
                $scope.trainSchedule = {};
            }
        });
    }
});
