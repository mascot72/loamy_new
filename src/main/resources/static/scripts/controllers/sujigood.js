'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstApp
 */

var todoApp = angular.module('firstApp')
    .controller('SujigoodCtrl', function($rootScope, $scope, $http, $routeParams, $sce){
	      
   
        // User agent displayed in home page
        $scope.userAgent = navigator.userAgent;
        
        // Needed for the loading screen
        $rootScope.$on('$routeChangeStart', function(){
            $rootScope.loading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function(){
            $rootScope.loading = false;
        });

        // 
        // 'Scroll' screen
        // 
        var scrollItems = [];
        var preUrl = 'http://www.sujigood.org'; 

        for (var i=1; i<=100; i++) {
            scrollItems.push('Item ' + i);
        }
        
        var scrollItems1 = [];
        
        $scope.scrollItems = scrollItems;
        var $page = 1;
        
        // Boardcast공통
        var broadcastItems = [];
        $scope.broadcastItems = broadcastItems;
        $scope.setBroadcastItems = function(board_id, page_no) {
            if ( board_id == undefined)
                board_id = 'BROADCAST_01';

            if (page_no == 1) {
                $page = 1;
                $scope.broadcastItems = broadcastItems = [];
            } else {
                $page++;
            }
            console.log('page : ' + $page);
            var req = {
                method: 'GET',
                url: preUrl+'/mobile/boardListJson.sgs?board_id='+board_id+'&page='+$page,
                headers: {
                    'Content-Type': undefined
                },
                data: { "test" : $page }
            }

      /*     
           var data = $scope.todo.boardItems;

            for(var key in data) {
                console.log(data[key]);
                broadcastItems.push(data[key]);
            }
            $scope.broadcastItems = broadcastItems;
*/

            $http(req).success(function(data){
                console.log('success!');
                console.log(data);
                
                for(var key in data) {
                    console.log(data[key]);
                    broadcastItems.push(data[key]);
                }
                $scope.broadcastItems = broadcastItems;
                
            }).error(function(data){
                console.log('error : ' + data);
            });

            
            
            console.log('end!!!');
            console.log(broadcastItems);
            
            $scope.board_id = board_id;
        }

        $scope.bottomReachedBroadcast = function() {
            $scope.setBroadcastItems($scope.board_id, $page+1);
        }
        
        
        $scope.bottomReached = function() {
            //alert('Congrats you scrolled to the end of the list!');
        }

        $scope.setModalData = function(item) {
            $scope.modalData = item;
            $scope.modalDataHtmlContents = $sce.trustAsHtml(item.contents);
        }
        
        $scope.setPhotoData = function(item) {
            console.log('photoData...');
            console.log(item);
            $scope.photoDataHtmlContents = $sce.trustAsHtml(item.contents);

            var req = {
                method: 'GET',
                url: preUrl+'/mobile/bbsContentJson.sgs?board_id='+item.board_id+'&seqNum='+item.seqNum,
                headers: {
                    'Content-Type': undefined
                },
            }

            $http(req).success(function(data){
                console.log('success!');
                console.log(data);
                item.boardData = data['boardData'];
                item.updateImageList = data['updateImageList'];
            }).error(function(data){
                console.log('error : ' + data);
            });
            
            console.log('set photoData...');
            console.log(item);
            $scope.photoData = item;
        }

        //
        // 'Forms' screen
        //  
        $scope.rememberMe = true;
        $scope.email = 'me@example.com';
        
        $scope.login = function() {
            alert('You submitted the login form');
        };

        // 
        // 'Drag' screen
        // 
        $scope.notices = [];
        
        for (var j = 0; j < 10; j++) {
            $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1) });
        }

        $scope.deleteNotice = function(notice) {
            var index = $scope.notices.indexOf(notice);
            if (index > -1) {
            $scope.notices.splice(index, 1);
            }
        };

        // $scope.httpGet = function(reqUrl, callbackFunc){
        //     $http.get(reqUrl).success(function(data){
        //        callbackFunc(data); 
        //     });
        // };
        
    });
