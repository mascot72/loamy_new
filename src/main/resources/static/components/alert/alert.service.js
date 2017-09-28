(function() {
    'use strict';

    angular
        .module('app')
        .provider('AlertService', AlertService);

    function AlertService () {
        this.toast = false;
        /*jshint validthis: true */
        this.$get = getService;

        this.showAsToast = function(isToast) {
            this.toast = isToast;
        };

        getService.$inject = ['toaster'];

        function getService (toaster) {

            return {
                success: success,
                error: error
            };


            // 원래 default timeout : 5000 miliseconds
            function success(title, body, timeout) {

                // success 인 경우의 timeout은 기본적으로 1000
                var timeout = angular.isNumber(timeout) ? timeout : 1000;

                toaster.success(title, body, timeout);
            }

            function error(title, body, timeout) {
                // return this.add({
                //     type: 'danger',
                //     msg: msg,
                //     params: params,
                //     toast: toast,
                //     position: position
                // });

                var timeout = angular.isNumber(timeout) ? timeout : 3000;

                toaster.error(title, body, timeout);
            }
        }
    }
})();