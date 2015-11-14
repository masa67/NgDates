
(function () {
    'use strict';

    /*global angular */
    angular
        .module('MainCtrl', [])
        .controller('MainController', ['$scope', 'dataHandler', function ($scope, dataHandler) {

            $scope.name = 'superhero';

            dataHandler.getData().then(function (resp) {
                $scope.date = resp.data.datetime;
            });
        }]);
}());