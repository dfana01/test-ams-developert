angular
    .module('sectorWeb.ctrl.home', [])
    .controller('homeCtrl', [
        '$scope',
        '$location',
        'paisService',
        'ciudadService',
        'sectorService',
        function ($scope, $location, paisService, ciudadService, sectorService) {

            $scope.paises = 0;
            $scope.ciudades = 0;
            $scope.sectores = 0;

            $scope.counts = function () {
                $scope.list = [];
                paisService.list()
                    .then(function successCallback(response) {
                        $scope.paises = response.data.length;
                    });
                ciudadService.list()
                    .then(function successCallback(response) {
                        $scope.ciudades= response.data.length;
                    });
                sectorService.list()
                    .then(function successCallback(response) {
                        $scope.sectores = response.data.length;
                    });
            };

            $scope.counts();
        }]);