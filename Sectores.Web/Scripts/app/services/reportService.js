angular
    .module("sectorWeb.service.reports", [])
    .factory("reportsService", ["$http",
        function ($http) {
            var baseUrl = "/api/Reports/";
            return {
                list: function () {
                    return $http({
                        method: "GET",
                        url: baseUrl
                    });
                }
            };
        }]);