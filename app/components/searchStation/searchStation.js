const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "tj7VDBgHG6-pFQSFngyHEi5pyaK9fE7Dr9y3O1ErWfywyY0CuW");
myHeaders.append("x-apihub-host", "IRCTC.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "5e8670a9-6bd1-4e9a-91e1-1a2f0882da65");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

angular.module('searchStation', [])
.component('searchStation', {
    templateUrl: 'components/searchStation/searchStation.html',
    controller: function($scope, $http) {
        $scope.searchStations = "";

        // Corrected API call with the proper URL and requestOptions
        $http.get('https://IRCTC.proxy-production.allthingsdev.co/api/v1/searchStation', requestOptions)
        .then((response) => {
            $scope.searchStations = response.data;
            console.log($scope.searchStations);
        })
        .catch((error) => {
            console.error("Error fetching search stations:", error);
        });
    }
});
