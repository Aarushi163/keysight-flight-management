angular.module('flightApp')
.component('flightManagement', {
    templateUrl: 'components/flight/flight.template.html',
    controller: function(FlightService) {

        const vm = this;
        vm.flights = [];
        vm.newFlight = {};
        vm.sortKey = 'ticketPrice';
        vm.reverse = false;
        vm.searchText = '';

        vm.$onInit = function() {
            vm.loadFlights();
        };

        vm.loadFlights = function() {
            FlightService.getFlights().then(res => {
                vm.flights = res.data;
            });
        };

        vm.addFlight = function() {
            FlightService.addFlight(vm.newFlight).then(() => {
                vm.newFlight = {};
                vm.loadFlights();
            });
        };

        vm.editFlight = function(flight) {
            vm.newFlight = angular.copy(flight);
        };

        vm.updateFlight = function() {
            FlightService.updateFlight(vm.newFlight).then(() => {
                vm.newFlight = {};
                vm.loadFlights();
            });
        };

        vm.deleteFlight = function(id) {
            if (confirm("Delete this flight?")) {
                FlightService.deleteFlight(id).then(() => {
                    vm.loadFlights();
                });
            }
        };

        vm.sortBy = function(key) {
            vm.reverse = (vm.sortKey === key) ? !vm.reverse : false;
            vm.sortKey = key;
        };
    }
});
