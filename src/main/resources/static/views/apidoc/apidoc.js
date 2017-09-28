/**
 * 컨검키워드 설정 검색 컨트롤러
 * Created by onedge on 15. 3. 18..
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ApiDocController', ApiDocController);

    ApiDocController.$inject = ['RestfulService', '$log'];

    function ApiDocController(RestfulService, $log) {

        var vm = this;

        // init form
        vm.isLoading = false;

        // error management
        vm.myErrorHandler = myErrorHandler;

        //vm.swaggerUrl = 'http://localhost:8080/v2/api-docs'
        vm.infos = false;

        onLoad();

        //error management
        function myErrorHandler (data, status) {
            alert('failed to load swagger: ' + status + '   ' + data);
        }

        function onLoad() {
            var options = {};
            options.domain = "configurations";

            $log.info("options", options);
            RestfulService.get(
                options,
                onGetSuccess
            );
        }

        function onGetSuccess (result, headers) {
            vm.configurations = result.message.result.configurations;

            $log.info("swagger.url", vm.configurations.swaggerUrl);

            // define swagger url
            vm.swaggerUrl = vm.configurations.swaggerUrl + '/v2/api-docs';
        }
    }

})();