angular
    .module('sectorWeb.ctrl.reports', [])
    .controller('reportsCtrl', [
        '$scope',
        '$location',
        'reportsService',
        '$routeParams',
        function ($scope, $location, reportsService, $routeParams) {
            $scope.list = [];
            $scope.searchText = $routeParams.param ? $routeParams.param: "";

            $scope.refresh = function () {
                $scope.list = [];
                reportsService.list()
                    .then(function successCallback(response) {
                        $scope.list = response.data; 
                    });
            };

            $scope.search = function () {
                if ($scope.searchText.length >= 3) {
                    $scope.go("/reports/" + $scope.searchText);
                }
            }

            $scope.refresh();
        }]);