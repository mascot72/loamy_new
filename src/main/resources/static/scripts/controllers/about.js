'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstApp
 */

var todoApp = angular.module('firstApp')
    .controller('BoardController', function($rootScope, $scope, $http, $routeParams){
	
        var init = function () {
            console.log('call init() $routeParams : ');
            console.log($routeParams);
            
            if ($routeParams.boardId) {
                
                if ($routeParams.boardId != $scope.board_id) {
                    $scope.setBroadcastItems($routeParams.boardId, 1);
                } else {
                    $scope.setBroadcastItems($routeParams.boardId, $page+1);
                }
                
            }
        }();

        var player;

        $scope.viewVimeo = function(vimeoId){
            var vimeoCd = vimeoId.replace('https://player.vimeo.com/video/','');
            var options = {
                id: parseInt(vimeoCd) || 59777392,
                width: 640,
                loop: true
            };

            player = player || new Vimeo.Player('made-in-ny', options);
            player.loadVideo(options.id).then(function(id) {
                // the video successfully loaded
            })

            player.setVolume(10);

            player.on('play', function() {
                console.log('played the video!');
            });
        };

    })
    .controller('AboutCtrl', function($rootScope, $scope, $http, $routeParams, $sce){
	      
   
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

           
           var data = $scope.todo.boardItems;

            for(var key in data) {
                console.log(data[key]);
                broadcastItems.push(data[key]);
            }
            $scope.broadcastItems = broadcastItems;

/*
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

            */
            
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

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        // $scope.httpGet = function(reqUrl, callbackFunc){
        //     $http.get(reqUrl).success(function(data){
        //        callbackFunc(data); 
        //     });
        // };
        
        if (!onload) onload($scope);
        $scope.todo = {
            items: [{ "action": "Buy Flowers", "done": false, name: '박이김', description: '오늘만남', date: '01/01/2016', count: 100 },
            { "action": "Get Shoes", "done": true, name: '백년손님', description: '개그 콘서트', date: '01/21/2016', count: 180 }
        ], boardItems :{
    "1": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2725,
        "seqNumObj": 2725,
        "board_id": "BROADCAST_01",
        "objNum": 278,
        "objNumObj": 278,
        "author": "관리자",
        "subject": "[요한복음강해72]섬김의 삶을 살라!",
        "subjectCategory": "[요한복음강해72]",
        "subjectMain": "섬김의 삶을 살라!",
        "passwd": "",
        "category": "",
        "regDate": "2016-10-09 오후 09:07:07",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 613,
        "readNumObj": 613,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "요한복음 13:3-5",
        "preach_date": "2016-10-09",
        "video_url": "http://media.sujigood.org/video/20161009SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/186148493",
        "mp3_url": "http://media.sujigood.org/audio/20161009SUN.mp3",
        "praise": "",
        "hymns": "",
        "praiseNum": 0,
        "hymnsNum": 0,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "2": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2710,
        "seqNumObj": 2710,
        "board_id": "BROADCAST_01",
        "objNum": 277,
        "objNumObj": 277,
        "author": "관리자",
        "subject": "[요한복음강해71]생각을 지키라!",
        "subjectCategory": "[요한복음강해71]",
        "subjectMain": "생각을 지키라!",
        "passwd": "",
        "category": "",
        "regDate": "2016-10-02 오후 10:28:20",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1310,
        "readNumObj": 1310,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "요한복음 13:2",
        "preach_date": "2016-10-02",
        "video_url": "http://media.sujigood.org/video/20161002SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/185207842",
        "mp3_url": "http://media.sujigood.org/audio/20161002SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2716,
        "hymnsNum": 2715,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "3": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2705,
        "seqNumObj": 2705,
        "board_id": "BROADCAST_01",
        "objNum": 276,
        "objNumObj": 276,
        "author": "관리자",
        "subject": " 나의 사랑 나의 교회여!",
        "subjectCategory": "",
        "subjectMain": " 나의 사랑 나의 교회여!",
        "passwd": "",
        "category": "",
        "regDate": "2016-09-25 오후 03:13:13",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 840,
        "readNumObj": 840,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "마태복음 16:15-19",
        "preach_date": "2016-09-25",
        "video_url": "http://media.sujigood.org/video/20160925SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/184172928",
        "mp3_url": "http://media.sujigood.org/audio/20160925SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2714,
        "hymnsNum": 2713,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "4": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2694,
        "seqNumObj": 2694,
        "board_id": "BROADCAST_01",
        "objNum": 275,
        "objNumObj": 275,
        "author": "관리자",
        "subject": "[요한복음강해70]끝까지 사랑하시니라!",
        "subjectCategory": "[요한복음강해70]",
        "subjectMain": "끝까지 사랑하시니라!",
        "passwd": "",
        "category": "",
        "regDate": "2016-09-18 오후 06:18:33",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1290,
        "readNumObj": 1290,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "요한복음 13:1",
        "preach_date": "2016-09-18",
        "video_url": "http://media.sujigood.org/video/20160918SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/183176178",
        "mp3_url": "http://media.sujigood.org/audio/20160918SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2696,
        "hymnsNum": 2695,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "5": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2686,
        "seqNumObj": 2686,
        "board_id": "BROADCAST_01",
        "objNum": 274,
        "objNumObj": 274,
        "author": "관리자",
        "subject": "[요한복음69]깨닫는 마음을 가지라!",
        "subjectCategory": "[요한복음69]",
        "subjectMain": "깨닫는 마음을 가지라!",
        "passwd": "",
        "category": "",
        "regDate": "2016-09-11 오후 05:27:15",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1428,
        "readNumObj": 1428,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "요한복음 12:37-40",
        "preach_date": "2016-09-11",
        "video_url": "http://media.sujigood.org/video/20160911SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/182271768",
        "mp3_url": "http://media.sujigood.org/audio/20160911SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2690,
        "hymnsNum": 2689,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "6": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2676,
        "seqNumObj": 2676,
        "board_id": "BROADCAST_01",
        "objNum": 273,
        "objNumObj": 273,
        "author": "관리자",
        "subject": "[요한복음강해68]빛의 자녀가 되라",
        "subjectCategory": "[요한복음강해68]",
        "subjectMain": "빛의 자녀가 되라",
        "passwd": "",
        "category": "",
        "regDate": "2016-09-04 오후 06:46:23",
        "editDate": "2016-09-08 오후 10:04:33",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1640,
        "readNumObj": 1640,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "goodadmin01:김진옥",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "요한복음 12:34-36",
        "preach_date": "2016-09-04",
        "video_url": "http://media.sujigood.org/video/20160904SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/181372322",
        "mp3_url": "http://media.sujigood.org/audio/20160904SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2678,
        "hymnsNum": 2677,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "7": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2666,
        "seqNumObj": 2666,
        "board_id": "BROADCAST_01",
        "objNum": 272,
        "objNumObj": 272,
        "author": "관리자",
        "subject": "[요한복음강해67]죽는 밀알,풍성한 열매",
        "subjectCategory": "[요한복음강해67]",
        "subjectMain": "죽는 밀알,풍성한 열매",
        "passwd": "",
        "category": "",
        "regDate": "2016-08-28 오후 05:29:08",
        "editDate": "2016-08-28 오후 05:30:54",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1502,
        "readNumObj": 1502,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "goodadmin01:김진옥",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사",
        "bible": "요한복음 12:24-26",
        "preach_date": "2016-08-28",
        "video_url": "http://media.sujigood.org/video/20160828SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/180469480",
        "mp3_url": "http://media.sujigood.org/audio/20160828SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2668,
        "hymnsNum": 2667,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "8": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2646,
        "seqNumObj": 2646,
        "board_id": "BROADCAST_01",
        "objNum": 271,
        "objNumObj": 271,
        "author": "관리자",
        "subject": "인생의 밤을 지나는 그대에게",
        "subjectCategory": "",
        "subjectMain": "인생의 밤을 지나는 그대에게",
        "passwd": "",
        "category": "",
        "regDate": "2016-08-21 오후 04:01:26",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1309,
        "readNumObj": 1309,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "최은혜 목사 ",
        "bible": "시편 108:1-5",
        "preach_date": "2016-08-21",
        "video_url": "http://media.sujigood.org/video/20160821SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/179623823",
        "mp3_url": "http://media.sujigood.org/audio/20160821SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2654,
        "hymnsNum": 2650,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "9": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2638,
        "seqNumObj": 2638,
        "board_id": "BROADCAST_01",
        "objNum": 270,
        "objNumObj": 270,
        "author": "관리자",
        "subject": " 주여! 이 민족을 살리소서!",
        "subjectCategory": "",
        "subjectMain": " 주여! 이 민족을 살리소서!",
        "passwd": "",
        "category": "",
        "regDate": "2016-08-14 오후 07:12:24",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1258,
        "readNumObj": 1258,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사 ",
        "bible": "요한계시록 2:1-5",
        "preach_date": "2016-08-14",
        "video_url": "http://media.sujigood.org/video/20160814SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/178784829",
        "mp3_url": "http://media.sujigood.org/audio/20160814SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2653,
        "hymnsNum": 2649,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    },
    "10": {
        "page": "1",
        "totalPage": 1,
        "totalCnt": 0,
        "listCountPerPage": 30,
        "currentRowNum": 0,
        "pageCountPerPage": 10,
        "pageHtml": null,
        "seqNum": 2632,
        "seqNumObj": 2632,
        "board_id": "BROADCAST_01",
        "objNum": 269,
        "objNumObj": 269,
        "author": "관리자",
        "subject": "[요한복음강해 66]하나님의 뜻을 알아가는 삶",
        "subjectCategory": "[요한복음강해 66]",
        "subjectMain": "하나님의 뜻을 알아가는 삶",
        "passwd": "",
        "category": "",
        "regDate": "2016-08-07 오후 07:27:02",
        "editDate": "",
        "memoNum": 0,
        "memoNumObj": 0,
        "readNum": 1680,
        "readNumObj": 1680,
        "ip_reg": "",
        "ip_edit": "",
        "usrAgent_reg": "goodadmin01:김진옥",
        "usrAgent_edit": "",
        "contents": "",
        "boardFileList": null,
        "img_url": null,
        "isNew": 0,
        "docType": null,
        "uploadFileList": null,
        "fileNumList": null,
        "commentNum": 0,
        "keyword": null,
        "search_seq": 0,
        "preacher": "강대형 목사 ",
        "bible": "요한복음 12:16",
        "preach_date": "2016-08-07",
        "video_url": "http://media.sujigood.org/video/20160807SUN.mp4",
        "sub_video_url": "https://player.vimeo.com/video/177888319",
        "mp3_url": "http://media.sujigood.org/audio/20160807SUN.mp3",
        "praise": "vimeo",
        "hymns": "vimeo",
        "praiseNum": 2652,
        "hymnsNum": 2648,
        "sub_contents1": "",
        "sub_contents2": "",
        "thumbnail_url": "",
        "orderNum": 0
    }
}};
        
        
    });
