angular.module('seatAvailibility',[])
.component('seatAvailibility',{
    templateUrl:'components/seatAvailibility/seatAvailibility.html',
    controller:function($scope,$http,searchBarService){
       $scope.searchBarService="";
       
       
       $http({
        method:"GET",
        url:`"https://IRCTC.proxy-production.allthingsdev.co/api/v1/checkSeatAvailability?query=${newQuery}`,
        params:{query:newQuery},
        headers:muHeaders
       }).then((response)=>{
        console.log("API Response");
        $scope.seatAvailibility=response.data

       }).catch((error)=>{
        console.error("Error fetching seat availibility details",error)
       })
    }
})