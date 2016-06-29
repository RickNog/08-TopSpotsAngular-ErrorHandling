(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['TopSpotsFactory'];
    /* @ngInject */
    function MainController(TopSpotsFactory) {
        var vm = this;
        vm.title = 'MainController';
        
        activate();
        ////////////////
        function activate() {
                getTopSpots();
            }

            function getTopSpots() {
                TopSpotsFactory.getTopSpots().then
                (function(response) {
                    vm.topspots = response.data;
                    toastr.error('Your code loaded successfully!!');
                },
                function(error) {
                    toastr.error(error);
                }
            )
        }
    }
})();







