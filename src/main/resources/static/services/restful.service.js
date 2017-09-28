
(function () {
    'use strict';

    angular
        .module('app')
        .factory('RestfulService', RestfulService);

    RestfulService.$inject = ['$resource'];

    function RestfulService ($resource) {

        var prefixUrl = '/api';	//server controller Request Mapper에서받을 접두사

        var service = $resource(
            prefixUrl + '/:domain/:action/:key',
            {
                domain: "@domain",
                action: "@action",
                key: "@key"
            },
            {
                get  :  {method:'GET'},
                query:  {
                    method:'POST',
                    transformResponse: function (data) {
                        data = angular.fromJson(data);
                        return data;
                    }
                },
                update: {method:'PUT'},
                delete: {method:'DELETE'}
            }
        );

        return service;
    }
})();
