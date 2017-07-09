angular
    .module("sectorWeb.service.sector", [])
    .factory("sectorService", ["$http",
        function ($http) {
            var baseUrl = "/api/sector/";
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
                        url:  + id
                    });
                },

                update: function (obj) {
                    return $http({
                        method: "PUT",
                        url: baseUrl,
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