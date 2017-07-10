angular
    .module("sectorWeb", [
        "ngSanitize",
        "ngRoute",
        "ngResource",
        "ui.bootstrap",
        "sectorWeb.ctrl.home",
        "sectorWeb.ctrl.sector",
        "sectorWeb.ctrl.ciudad",
        "sectorWeb.ctrl.pais",
        "sectorWeb.ctrl.modal",
        "sectorWeb.ctrl.reports",
        "sectorWeb.service.sector",
        "sectorWeb.service.ciudad",
        "sectorWeb.service.pais",
        "sectorWeb.service.reports"
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
        $routeProvider.when("/reports/", {
            templateUrl: "/Home/Reports",
            controller: "reportsCtrl"
        });
        $routeProvider.when("/reports/:param", {
            templateUrl: "/Home/Reports",
            controller: "reportsCtrl"
        });
        $routeProvider.otherwise({
            redirectTo: "/"
        });
        $locationProvider.html5Mode(true);
    }]).run(function ($rootScope, $location, $window, $uibModal) {
        $rootScope.back = function () {
            $window.history.back();
        };

        $rootScope.go = function (path) {
            $location.path(path);
        };

        $rootScope.modal = function(context) {
            return $uibModal.open({
                templateUrl: "/Home/Modal",
                controller: "modalCtrl",
                controllerAs: "$ctrl",
                resolve: {
                    context: function () { return context; }
                }
            });   
        }
    });
