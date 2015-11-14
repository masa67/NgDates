
(function () {
    'use strict';

    /*global angular */
    angular
        .module('DataService', [])
        .factory('dataHandler', ['$http', function ($http) {

            return {
                getData: function () {
                    return $http.get('/data');
                }
            };
        }]);
}());
