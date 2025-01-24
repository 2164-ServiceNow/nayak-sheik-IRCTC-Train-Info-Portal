angular.module('getFare', [])
.component('getFare', {
    templateUrl: 'components/getFare/getFare.html',
    controller: function($scope, $http) {
        $scope.trainNo = '';
        $scope.fromStationCode = '';
        $scope.toStationCode = '';
        $scope.fareData = {};

        // Headers for the API request
        const myHeaders = {
            "x-apihub-key": "Ka0pFSvDDlnHLZopyvMJTgZyjoAU02-5KHSQp4ene0G1FyVtto",
            "x-apihub-host": "IRCTC.allthingsdev.co",
            "x-apihub-endpoint": "5cc3caa8-66a6-41c6-ac2d-a6f18458f11b"
        };

        // Function to fetch fare data
        $scope.getFare = function() {
            if (!$scope.trainNo || !$scope.fromStationCode || !$scope.toStationCode) {
                alert("Please provide Train Number, From Station Code, and To Station Code.");
                return;
            }

            // Construct the API URL dynamically with the form inputs
            const url = `https://IRCTC.proxy-production.allthingsdev.co/api/v2/getFare?trainNo=${$scope.trainNo}&fromStationCode=${$scope.fromStationCode}&toStationCode=${$scope.toStationCode}`;

            // Make the HTTP request to fetch fare data
            $http({
                method: "GET",
                url: url,
                headers: myHeaders
            }).then((response) => {
                console.log("API Response", response);
                $scope.fareData = response.data || {};
                console.log(response.data)
            }).catch((error) => {
                console.error("Error fetching fare data", error);
                $scope.fareData = {};
            });
        };
    }
});
