angular.module('searchBar', [])
    .component('searchbar', {
        templateUrl: 'components/searchBar/searchBar.html',
        controller: function searchBarCtrl($scope, $rootScope, searchBarService) {
            $scope.searchValue = ""; // Initialize the search value

            // Clear search input whenever route changes
            $rootScope.$on('$routeChangeStart', function() {
                $scope.searchValue = ""; // Reset searchValue when navigating to a new route
            });

            // Function to handle the search
            $scope.search = function() {
                searchBarService.setQuery($scope.searchValue); // Use search service to store the query
            };
        }
    });
