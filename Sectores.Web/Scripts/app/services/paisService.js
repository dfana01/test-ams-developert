angular
    .module("sectorWeb.service.pais", [])
    .factory("paisService", ["$http",
        function ($http) {
            var baseUrl = "/api/Pais/";
            return {
                list: function () {
                    return $http({
                        method: "GET",
                        url: baseUrl
                    });
                },

                create: function (obj) {
                    return $http({
                        method: "POST",
                        url: baseUrl,
                        data: obj
                    });
                },

                get: function (id) {
                    return $http({
                        method: "GET",
                        url: baseUrl + id
                    });
                },

                update: function (obj) {
                    return $http({
                        method: "PUT",
                        url: baseUrl + obj.Id,
                        data: obj
                    });
                },

                delete: function (id) {
                    return $http({
                        method: "DELETE",
                        url: baseUrl + id
                    });
                }
            };
        }]);