angular.module('getLiveTrainStatus', [])
.component('getLiveTrainStatus', {
    templateUrl: 'components/getLiveTrainStatus/getLiveTrainStatus.html',
    controller: function($scope, $http) {
        $scope.fromStationCode = '';
        $scope.toStationCode = '';
        $scope.hours = '';
        $scope.liveStationData = {};

        // Headers for the API request
        const myHeaders = {
            "x-apihub-key": "Ka0pFSvDDlnHLZopyvMJTgZyjoAU02-5KHSQp4ene0G1FyVtto",
            "x-apihub-host": "IRCTC.allthingsdev.co",
            "x-apihub-endpoint": "5e8670a9-6bd1-4e9a-91e1-1a2f0882da65"
        };

        // Function to fetch live station data
        $scope.getLiveStation = function() {
            if (!$scope.fromStationCode || !$scope.toStationCode || !$scope.hours) {
                alert("Please provide From Station Code, To Station Code, and Hours.");
                return;
            }

            // Construct the API URL dynamically with the form inputs
            const url = `https://IRCTC.proxy-production.allthingsdev.co/api/v3/getLiveStation?fromStationCode=${$scope.fromStationCode}&toStationCode=${$scope.toStationCode}&hours=${$scope.hours}`;

            // Make the HTTP request to fetch live station data
            $http({
                method: "GET",
                url: url,
                headers: myHeaders
            }).then((response) => {
                console.log("API Response", response);
                $scope.liveStationData = response.data || {};
            }).catch((error) => {
                console.error("Error fetching live station data", error);
                $scope.liveStationData = {};
            });
        };
    }
});
