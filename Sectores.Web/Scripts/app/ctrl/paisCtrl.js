angular
    .module("sectorWeb.ctrl.pais", [])
    .controller("paisCtrl", [
        "$scope",
        "$location",
        "$uibModal",
        "paisService",
        function ($scope, $location, $uibModal, paisService) {

            $scope.list = [];
            $scope.obj = {};
            $scope.createOrUpdateTemplateId = "update-create-pais.html";
            $scope.deleteTemplateId = "delete-pais.html";
            $scope.titleCreate = "Crear Pais";
            $scope.titleUpdate = "Actualizar Pais";
            $scope.titleDelete = "Eliminar Pais";

            $scope.refresh = function () {
                $scope.list = [];
                paisService.list()
                    .then(function successCallback(response) {
                        $scope.list = response.data;
                    });
            };

            $scope.create = function() {
                var modalInstance = $scope.modal({
                                                    "contentTemplate":$scope.createOrUpdateTemplateId, 
                                                    "obj": { },
                                                    "title": $scope.titleCreate
                                                });
                modalInstance.result.then(function (data) {
                    paisService.create(data)
                        .then(function successCallback(response) {
                            $scope.refresh();
                        });
                    
                });
            }

            $scope.update = function (obj) {
                var modalInstance = $scope.modal({
                                                    "contentTemplate": $scope.createOrUpdateTemplateId,
                                                    "obj": angular.copy(obj),
                                                    "title": $scope.titleUpdate
                                                });
                modalInstance.result.then(function (data) {
                    paisService.update(data)
                        .then(function successCallback(response) {
                            $scope.refresh();
                        });
                });
            }

            $scope.delete = function (obj) {
                var modalInstance = $scope.modal(
                                                {
                                                    "contentTemplate": $scope.deleteTemplateId,
                                                    "obj": obj,
                                                    "title": $scope.titleDelete
                                                });
                modalInstance.result.then(function (data) {
                    paisService.delete(data.Id)
                        .then(function successCallback(response) {
                            var index = $scope.list.indexOf(data);
                            $scope.list.splice(index, 1);
                        });
                });

            }

            $scope.refresh();

        }]);