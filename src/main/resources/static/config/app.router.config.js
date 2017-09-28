(function() {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);


    routerConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {


        // Now set up the states
        $stateProvider
            .state('basicSearchHistory', {
                url: "/basicSearch",
                templateUrl: 'views/basicsearch/basic.search.html',
                controller: 'BasicSearchHistoryController',
                controllerAs: 'vm',
                data: {
                    pageTitle: '기본 조회'
                }
            })
            .state('home', {
                url: "/home",
                templateUrl: 'views/home/index.html',
                controller: 'BoardController',//'BoardController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Homepage'
                }
            })
            .state('apiDoc', {
                url: "/apiDoc",
                templateUrl: 'views/apidoc/apidoc.html',
                controller: 'ApiDocController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Rest API Documentation'
                }
            })
            .state('board',{
                url : '/board',
                templateUrl : 'views/admin/board.html',
                controller : 'BoardController',
                controllerAs : 'vm',
                data : {
                    pageTitle : '자료실 게시판 목록'
                }
            })
            .state('broadcast',{
                url : '/broadcast',
                templateUrl : 'views/broadcast/list.html',
                controller : 'BroadcastController',
                controllerAs : 'vm',
                data : {
                    pageTitle : '방송 게시판 목록'
                }
            })
            .state('editBroadcast',{
                url : '/broadcast/edit',
                templateUrl : 'views/broadcast/edit.html',
                controller : 'BroadcastController',
                controllerAs : 'vm',
                data : {
                    pageTitle : '방송 게시판 수정'
                }
            })
            .state('artical',{
                url : '/artical',
                templateUrl : 'views/board/index.html',
                controller : 'BoardController',
                controllerAs : 'vm',
                data : {
                    pageTitle : '게시판'
                }
            });



        //$locationProvider.html5Mode(true);
     // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/basicSearch");
    }
})();
