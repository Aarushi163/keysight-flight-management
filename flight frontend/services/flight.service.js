angular.module('flightApp')
.service('FlightService', function($http) {

    const BASE_URL = "http://localhost:3000/flights";

    this.getFlights = function() {
        return $http.get(BASE_URL);
    };

    this.addFlight = function(flight) {
        return $http.post(BASE_URL, flight);
    };

    this.updateFlight = function(flight) {
        return $http.put(`${BASE_URL}/${flight.id}`, flight);
    };

    this.deleteFlight = function(id) {
        return $http.delete(`${BASE_URL}/${id}`);
    };
});
