angular.module('getTrainClasses', [])
.component('getTrainClasses', {
    templateUrl: 'components/getTrainClasses/getTrainClasses.html',
    controller: function($scope, $http, searchBarService) {
        $scope.trainClasses = []; // Initialize as an empty array
        $scope.trainNumber = ''; // Initialize the train number

        // Watch for changes in the search query from the searchBarService
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newTrainNumber) {
            if (newTrainNumber) {
                $scope.trainNumber = newTrainNumber;

                const myHeaders = {
                    "x-apihub-key": "Ka0pFSvDDlnHLZopyvMJTgZyjoAU02-5KHSQp4ene0G1FyVtto",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "3f920cf0-c782-42bc-a88d-4911ba710230"
                };

                // Check if the train number is not empty before making the request
                if (newTrainNumber.trim() !== "") {
                    $http({
                        method: "GET",
                        url: `https://IRCTC.proxy-production.allthingsdev.co/api/v1/getTrainClasses`,
                        params: { trainNo: newTrainNumber },
                        headers: myHeaders
                    }).then((response) => {
                        console.log("API Response:", response);
                        console.log(response.data.data);
                        // Ensure response.data is assigned to trainClasses correctly
                        $scope.trainClasses = response.data || []; // Fallback to empty array if response is empty
                    }).catch((error) => {
                        console.error("Error fetching train classes:", error);
                    });
                }
            } else {
                $scope.trainClasses = []; // Clear results if train number is empty
            }
        });
    }
});
