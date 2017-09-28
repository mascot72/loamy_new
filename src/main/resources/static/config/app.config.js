(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$httpProvider', '$logProvider'];

    function config($httpProvider, $logProvider) {

        /* form encoding, utf-8 */
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

        /* disable debug log */
        $logProvider.debugEnabled(true);
    }
})();