angular
    .module('sectorWeb.ctrl.sector', [])
    .controller('sectorCtrl', [
        '$scope',
        '$location',
        'sectorService',
        'ciudadService',
        function ($scope, $location, sectorService, ciudadService) {

            $scope.list = [];
            $scope.ciudades = [];
            $scope.obj = {};
            $scope.createOrUpdateTemplateId = "update-create-sector.html";
            $scope.deleteTemplateId = "delete-sector.html";
            $scope.titleCreate = "Crear Sector";
            $scope.titleUpdate = "Actualizar Sector";
            $scope.titleDelete = "Eliminar Sector";

            $scope.populatedCiudades = function () {
                $scope.ciudades = [];
                ciudadService.list()
                    .then(function successCallback(response) {
                        $scope.ciudades = response.data;
                    });
            };

            $scope.refresh = function () {
                $scope.list = [];
                sectorService.list()
                    .then(function successCallback(response) {
                        $scope.list = response.data;
                        $scope.populatedCiudades();
                    });
            };

            $scope.create = function () {
                var modalInstance = $scope.modal({
                    "contentTemplate": $scope.createOrUpdateTemplateId,
                    "obj": {},
                    "title": $scope.titleCreate,
                    "ciudades": $scope.ciudades
                });
                modalInstance.result.then(function (data) {
                    sectorService.create(data)
                        .then(function successCallback(response) {
                            $scope.refresh();
                        });

                });
            }

            $scope.update = function (obj) {
                var modalInstance = $scope.modal({
                    "contentTemplate": $scope.createOrUpdateTemplateId,
                    "obj": angular.copy(obj),
                    "title": $scope.titleUpdate,
                    "ciudades": $scope.ciudades
                });
                modalInstance.result.then(function (data) {
                    sectorService.update(data)
                        .then(function successCallback(response) {
                            $scope.refresh();
                        });
                });
            }

            $scope.delete = function (obj) {
                var modalInstance = $scope.modal({
                    "contentTemplate": $scope.deleteTemplateId,
                    "obj": obj,
                    "title": $scope.titleDelete
                });
                modalInstance.result.then(function (data) {
                    sectorService.delete(data.Id)
                        .then(function successCallback(response) {
                            var index = $scope.list.indexOf(data);
                            $scope.list.splice(index, 1);
                        });
                });

            }

            $scope.refresh();

        }]);