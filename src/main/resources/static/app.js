(function() {
    'use strict';

    angular.module('app', [
        'ui.bootstrap',
        'ui.utils',
        'ngResource',
        'toaster',
        'ui.router',
        'ngJsonExportExcel',
        'ngSanitize',
        'ngCsv',
        'ui.select',
        'swaggerUi'])
        .run(run);

    function run($rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            if (toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            }
        });
    }
})();

