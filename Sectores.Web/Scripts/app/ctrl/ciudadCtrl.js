angular
    .module('sectorWeb.ctrl.ciudad', [])
    .controller('ciudadCtrl', [
        '$scope',
        '$location',
        'ciudadService',
        'paisService',
        function ($scope, $location, ciudadService, paisService) {
            $scope.list = [];
            $scope.paises = [];
            $scope.obj = {};
            $scope.createOrUpdateTemplateId = "update-create-ciudad.html";
            $scope.deleteTemplateId = "delete-ciudad.html";
            $scope.titleCreate = "Crear Ciudad";
            $scope.titleUpdate = "Actualizar Ciudad";
            $scope.titleDelete = "Eliminar Ciudad";

            $scope.populatedPaises = function () {
                $scope.paises = [];
                paisService.list()
                    .then(function successCallback(response) {
                        $scope.paises = response.data;
                    });
            };

            $scope.refresh = function () {
                $scope.list = [];
                ciudadService.list()
                    .then(function successCallback(response) {
                        $scope.list = response.data;
                        $scope.populatedPaises();
                    });
            };

            $scope.create = function () {
                var modalInstance = $scope.modal({
                                                    "contentTemplate": $scope.createOrUpdateTemplateId,
                                                    "obj": {},
                                                    "title": $scope.titleCreate,
                                                    "paises": $scope.paises
                                                });
                modalInstance.result.then(function (data) {
                    ciudadService.create(data)
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
                                                    "paises": $scope.paises
                                                });
                modalInstance.result.then(function (data) {
                    ciudadService.update(data)
                        .then(function successCallback(response) {
                            $scope.refresh();
                        });
                });
            }

            $scope.delete = function (obj) {
                var modalInstance = $scope.modal({
                    "contentTemplate": $scope.deleteTemplateId,
                    "obj": obj,
                    "title": $scope.titleDelete,
                    "paises": $scope.paises
                });
                modalInstance.result.then(function (data) {
                    ciudadService.delete(data.Id)
                        .then(function successCallback(response) {
                            var index = $scope.list.indexOf(data);
                            $scope.list.splice(index, 1);
                        });
                });

            }

            $scope.refresh();
        }]);