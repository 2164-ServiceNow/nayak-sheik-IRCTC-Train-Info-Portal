angular.module('searchStation', [])
.component('searchStation', {
    templateUrl: 'components/searchStation/searchStation.html',
    controller: function($scope, $http, searchBarService) {
        $scope.searchStations = "";
        $scope.searchValue = ''

        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery) {
                $scope.searchValue = newQuery;
        
                const myHeaders = {
                    "x-apihub-key": "asWEaLJmfOcoPdY5sZsFSnYTN6SKs6pgn6VRisM-znswtVzCfL",
                    "x-apihub-host": "IRCTC.allthingsdev.co",
                    "x-apihub-endpoint": "5e8670a9-6bd1-4e9a-91e1-1a2f0882da65"
                };
        
                $http({
                    method: "GET",
                    url: `https://IRCTC.proxy-production.allthingsdev.co/api/v1/searchStation?query=${newQuery}`,
                    params: { query: newQuery },
                    headers: myHeaders
                }).then((response) => {
                    console.log("API Response:", response);
                    $scope.searchStations = response.data
                }).catch((error) => {
                    console.error("Error fetching search stations:", error);
                });
            }
        });        
    }
})