angular.module('searchBar', [])
    .component('searchbar', {
        templateUrl: 'components/searchBar/searchBar.html',
        controller: function searchBarCtrl($scope){
            $scope.searchValue=""
        }
    })