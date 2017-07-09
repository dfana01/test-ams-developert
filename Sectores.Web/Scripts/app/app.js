angular
    .module("sectorWeb", [
        "ngSanitize",
        "ngRoute",
        "ngResource",
        "sectorWeb.ctrl.home",
        "sectorWeb.ctrl.sector",
        "sectorWeb.ctrl.ciudad",
        "sectorWeb.ctrl.pais",
        /*"sectorWeb.ctrl.reports",*/
        "sectorWeb.service.sector",
        "sectorWeb.service.ciudad",
        "sectorWeb.service.pais" /*,
        "sectorWeb.service.reports" */
    ])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

        $routeProvider.when("/", {
            templateUrl: "/Home/Dashboard",
            controller: "homeCtrl"
        });
        $routeProvider.when("/sector/", {
            templateUrl: "/Home/Sector",
            controller: "sectorCtrl"
        });
        $routeProvider.when("/ciudad/", {
            templateUrl: "/Home/Ciudad",
            controller: "ciudadCtrl"
        });
        $routeProvider.when("/pais/", {
            templateUrl: "/Home/Pais",
            controller: "paisCtrl"
        });
        $routeProvider.otherwise({
            redirectTo: "/"
        });
        $locationProvider.html5Mode(true);
    }]).run(function ($rootScope, $location, $window) {
            $rootScope.back = function () {
                $window.history.back();
            };

            $rootScope.go = function (path) {
                $location.path(path);
            };
    });
