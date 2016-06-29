(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('TopSpotsFactory', TopSpotsFactory);
    TopSpotsFactory.$inject = ['$http', '$q'];
    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////


        	function getTopSpots() {

        		var defer = $q.defer();

                $http({
                method: "GET",
                url: "app/topspots.json"
             }).then(function(response) {

             	defer.resolve(response);
             },
             function(error) {
             	defer.reject(error);
             
              
          });

             return defer.promise;
        }
    }
})();
