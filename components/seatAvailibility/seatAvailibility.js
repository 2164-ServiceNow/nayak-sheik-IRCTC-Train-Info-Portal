angular.module('seatAvailibility', [])
.component('seatAvailibility', {
    templateUrl: 'components/seatAvailibility/seatAvailibility.html',
    controller: function($scope, $http, searchBarService) {
        $scope.searchValue = '';

        $scope.$watch(function() {
            return searchBarService.getQuery();
        }, function(newQuery) {
            if (newQuery) {
                $scope.searchValue = newQuery;

                const myHeaders = {
                    "x-apihub-key": "fb8dbe5110mshcf13c98485917cfp100148jsnc69d7b39758b",
                    "x-apihub-host": "irctc1.p.rapidapi.com",
                    "x-apihub-endpoint": "d98f4bb4-8510-4d9e-81a1-9f18eeb38a63"
                };

                $http({
                    method: "GET",
                    url: `https://IRCTC.proxy-production.allthingsdev.co/api/v1/checkSeatAvailability?query=${newQuery}`,
                    headers: myHeaders
                }).then((response) => {
                    console.log("API Response", response);
                    $scope.seatAvailibility = response.data;
                }).catch((error) => {
                    console.error("Error fetching seat availability details", error);
                });
            }
        });
    }
});
