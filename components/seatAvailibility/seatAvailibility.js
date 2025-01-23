angular.module('seatAvailibility', [])
.component('seatAvailibility', {
    templateUrl: 'components/seatAvailibility/seatAvailibility.html',
    controller: function($scope, $http) {
        $scope.seatAvailabilities = [];

        // Initialize query parameters with default values
        $scope.classType = ''
        $scope.fromStationCode = ''
        $scope.quota = ''
        $scope.toStationCode = ''
        $scope.trainNo = ''
        $scope.date = ''

        // $scope.statusData = {
        //     status : '',
        //     message: '',
        //     timestamp: ''
        // }

        // Search function to fetch seat availability based on input values
        $scope.searchSeats = function() {
            const myHeaders = {
                "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
                "X-RapidAPI-Key": "fb8dbe5110mshcf13c98485917cfp100148jsnc69d7b39758b",
                "x-apihub-key": "tj7VDBgHG6-pFQSFngyHEi5pyaK9fE7Dr9y3O1ErWfywyY0CuW",
                "x-apihub-host": "IRCTC.allthingsdev.co",
                "x-apihub-endpoint": "d98f4bb4-8510-4d9e-81a1-9f18eeb38a63"
            };

            // Construct the API URL dynamically with the form inputs
            const url = `https://IRCTC.proxy-production.allthingsdev.co/api/v1/checkSeatAvailability?classType=${$scope.classType}&fromStationCode=${$scope.fromStationCode}&quota=${$scope.quota}&toStationCode=${$scope.toStationCode}&trainNo=${$scope.trainNo}&date=${$scope.date}`;

            // Make the HTTP request to fetch seat availability
            $http({
                method: "GET",
                url: url,
                headers: myHeaders
            }).then((response) => {
                console.log("API Response", response);
                $scope.seatAvailabilities = response.data || [];
            }).catch((error) => {
                console.error("Error fetching seat availability details", error);
                $scope.seatAvailabilities = [];
            });
        };
    }
});
