'use strict';

module.exports = ['$http','$q', 'api', function($http, $q, api) {

    this.getRestaurants = function() {
        return getRestaurants().then(function(response) {
            return response.data;
        }, function(reason) {
            console.log('Failed getRestaurants: ' + JSON.stringify(reason));
        });
    }

    function getRestaurants(){
        return $http.post(api + "/restaurants");
    }

    this.voteRestaurant = function(id, userId, week){

        var deferred = $q.defer();

        var data = {'restaurantId':id, 'userId':userId, 'week':week };

        voteRestaurant(data).then(function(response) {
            deferred.resolve(response.data);
        }, function(reason) {
            console.log('Failed voteRestaurant: ' + JSON.stringify(reason));
            deferred.reject(reason.status);
        });
        return deferred.promise;
    }

    function voteRestaurant(data){
        return $http.post(api + "/voteRestaurant", data);
    }

    this.getChoosenRestaurant = function(week) {
        var data = {'week':week };
        return getChoosenRestaurant(data).then(function(response) {
            return response.data;
        }, function(reason) {
            console.log('Failed getChoosenRestaurant: ' + JSON.stringify(reason));
        });
    }

    function getChoosenRestaurant(data){
        return $http.post(api + "/getChoosenRestaurant", data);
    }

    this.reset = function() {
        return reset().then(function(response) {
            return response.data;
        }, function(reason) {
            console.log('Failed reset: ' + JSON.stringify(reason));
        });
    }

    function reset(){
        return $http.post(api + "/reset");
    }

}]