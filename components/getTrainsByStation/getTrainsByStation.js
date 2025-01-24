angular.module('getTrainsByStation', [])
.component('getTrainsByStation', {
    templateUrl: 'components/getTrainsByStation/getTrainsByStation.html',
    controller: function($scope, $http, searchBarService) {
        $scope.getTrainsByStations = "";
        $scope.searchValue = '';

        // Clear previous search value when this component is initialized
        searchBarService.setQuery('');  // This will clear the search query in the search bar
        $scope.searchValue = '';  // Clear the local search input as well
 
        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery) {
                $scope.searchValue = newQuery;
       
                const myHeaders = {
                    "x-apihub-key": "Ka0pFSvDDlnHLZopyvMJTgZyjoAU02-5KHSQp4ene0G1FyVtto",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "f4ef646d-dca2-42e9-bef0-3e681b1e1ad9"
                };
       
                $http({
                    method: "GET",
                    url: `https://IRCTC.proxy-production.allthingsdev.co/api/v3/getTrainsByStation?stationCode=${newQuery}`,
                    params: { query: newQuery },
                    headers: myHeaders
                }).then((response) => {
                    console.log("API Response:", response);
                    $scope.getTrainsByStations = response.data;
                }).catch((error) => {
                    console.error("Error fetching search stations:", error);
                });
            }
        });        
    }
});