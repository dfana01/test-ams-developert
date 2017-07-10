angular
    .module('sectorWeb.ctrl.modal', [])
    .controller('modalCtrl', function ($uibModalInstance, context) {
        var $ctrl = this;

        $ctrl.obj = context.obj;
        $ctrl.contentTemplate = context.contentTemplate;
        $ctrl.title = context.title;
        $ctrl.extraContext = context;

        $ctrl.submit = function () {
            $uibModalInstance.close($ctrl.obj);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss("cancel");
        };
});
