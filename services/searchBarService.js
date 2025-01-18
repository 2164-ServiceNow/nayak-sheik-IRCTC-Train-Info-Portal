angular.module('IRCTCApp')
    .service('searchBarService', function(){
        this.query = '';

        this.setQuery = function(query){
            this.query = query
            console.log(`${query} from setQuery in the service`)
        }

        this.getQuery = function(){
            return this.query
        }
    })