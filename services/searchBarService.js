angular.module('searchBar')
    .service('searchBarService', function() {
        let query = '';

        // Get the current query
        this.getQuery = function() {
            return query;
        };

        // Set a new query
        this.setQuery = function(newQuery) {
            query = newQuery;
        };
    });
