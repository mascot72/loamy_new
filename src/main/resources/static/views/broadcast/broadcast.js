angular
    .module('app')
    .controller('BroadcastController', BroadcastController);
BroadcastController.$inject = ['$anchorScroll','$location', '$http', '$log', '$uibModal','config', 'RestfulService','AlertService'];

var org = {};

function BroadcastController($anchorScroll, $location, $http, $log, $uibModal, config, RestfulService, AlertService) {
    var vm = this;
    var player;
    vm.list = {};
    org = vm;

    vm.useYns = [
        {id : '', name : 'All'},
        {id : 'NO', name : 'No'}];

    //default value
    var sortInfo = 'seqNum DESC';	//sorting QUERY entity
    vm.head = {};
    vm.pageSize = 10;
    vm.page = 1;
    vm.editItem = null;

    //inject method
    vm.pageSizes = config.pageSizes;
    vm.saveDetail = saveDetail;
    vm.viewFile = viewFile;
    vm.sort = sort;
    vm.search = search;
    vm.pageChanged = pageChanged;
    vm.pageSizeChanged = pageSizeChanged;
    vm.viewVimeo = viewVimeo;	//동영상보기
    vm.setMode = setMode;	//등록하기
    vm.edit = edit;	//수정하기

    cntr = vm;

    //Set Sorting
    function sort(column){

    	sortInfo = column + (sortInfo.indexOf('DESC') > 0 ? ' ASC' : ' DESC');
    	search();
    }

    //detail info panel show/hide
    function viewFile(){
    	return vm.editItem ? 'views/broadcast/edit.html' : '';
    }

    /**
     * paging을 변경하였을 경우
     */
    function pageChanged() {
         if (vm.totalCount <= 0)
             return;

         search();
    }

    //한페이지 수 변경
    function pageSizeChanged() {

    	search();
    }

    function search(page){
    	vm.editItem = null;
        var options = {};

        if (page){	//새로조회시에만 totalCount 수행되어야 성능에 좋은 이유!
        	//get totalCount
        	getTotalCount();
        	vm.page = page || 1;	//set firstPage
        }

        options.domain = 'broadcast';
        options.action = 'findAll';
        options.key = 'onePage';

        options.sort = 'seqNum';	//기본 정렬
        options.listCountPerPage = 10;

        var board = {};
        for (var e in vm.options){
        	options[e] = vm.options[e];
        }
        options.pageSize = vm.pageSize;
        options.sort = sortInfo;
        options.page = vm.page;

        //조회(options를 이용해 조건전달)
        RestfulService.query(
            options,
            function(result,headers) {

                var resultObject = angular.copy(result.message.result);
                vm.list = resultObject.list;

                AlertService.success('정보조회', '게시판 목록을 조회했습니다.');
            },
            function onGetError(error) {
                $log.info(error);

                if (error.data) {
                    AlertService.error('정보조회', error.data.message.error.message);
                } else {
                    AlertService.error('정보조회', '통신에러가 발생하였습니다.');
                }
            }
        );
    }

    // 조회 전체행 가져오기
    function getTotalCount(){
        var options = {
        	domain:'broadcast',
        	action:'findAll',
        	key:'totalCount'
        };        	

        var board = {};
        for (var e in vm.options){
        	options[e] = vm.options[e];
        }

        //조회(options를 이용해 조건전달)
        RestfulService.query(
            options,
            function(result,headers) {

                var resultObject = angular.copy(result.message.result);
                vm.totalCount = resultObject.totalCount;

            },
            function onGetError(error) {
                $log.info(error);

                if (error.data) {
                    AlertService.error('정보조회', error.data.message.error.message);
                } else {
                    AlertService.error('정보조회', '통신에러가 발생하였습니다.');
                }
            }
        );
    }

    function get(){
        var options = {};

        options.domain = 'broadcast';

        options.board = board;
        options.seqNum = vm.editItem.seqNum;
        var board = {};
        for (var e in vm.options){
        	options[e] = vm.options[e];
        }

        //조회(options를 이용해 조건전달)
        RestfulService.get(
            options,
            function(result,headers) {

                var resultObject = angular.copy(result.message.result);
                vm.editItem = resultObject.item;

                AlertService.success('정보조회', '방송을 조회했습니다.');
            },
            function onGetError(error) {
                $log.info(error);

                if (error.data) {
                    AlertService.error('정보조회', error.data.message.error.message);
                } else {
                    AlertService.error('정보조회', '통신에러가 발생하였습니다.');
                }
            }
        );
    }

    //등록 및 수정
    function saveDetail(){
    	var options = {};

    	options.domain = vm.editItem.seqNum ? 'editBroadcast' : 'addNewBroadcast';	//수정/등록
    	if (vm.editItem.seqNum){
    		options.key = vm.editItem.seqNum;
    		for (var e in vm.editItem){
            	if (e){
            		options[e] = vm.editItem[e];
            	}
            }
    	}
    	else{
    		$('input,select').each(function(i, e){
            	if (e.name){
            		options[e.name] = $(e).val();
            	}
            });
    	}
    	options.board = board;
    	var mode = vm.options.seqNum ? 'EDIT' : 'NEW';
        var board = {};

    	RestfulService.update(
    			options,
    			function (result, headers){
    				var resultObject = angular.copy(result.message.result);
    				AlertService.success('정보조회', resultObject.message === 'successful' ? (mode === 'NEW' ? '등록을 완료 했습니다.' : '수정을 완료했습니다.') : 'fail!');
    				setTimeout(function(){
    					vm.editItem = null;
    					vm.setMode();
    					},
    				1000);
    			},
    			function onGetError(error) {
                    $log.info(error);

                    if (error.data) {
                        AlertService.error('정보조회', error.data.message.error.message);
                    } else {
                        AlertService.error('정보조회', '통신에러가 발생하였습니다.');
                    }
                }
    	);
    }

    //수정페이지 표시
    function edit(item){
    	if (item){
    		if (vm.editItem === item){
    			vm.editItem = null;	//닫기
    		}
    		else {
    			vm.editItem = item;
    		}

    		//$location.path('broadcast/edit');	//addNew page
    	}
    	else {
    		vm.editItem = null;	//닫기
    	}
    }

    //신규페이지 표시
    function setMode(mode){
    	if (mode === 'EDIT'){
    		vm.editItem = {seqNum:0, boardId:'DEL_BROADCAST_14'};	//addNew page
    	}
    	else {
    		//list page
    		vm.editItem = null;
    	}
    }

    //Viemo player
    var curVimeoId;
    function viewVimeo(vimeoId){
    	console.log(vimeoId);
        var idx = vimeoId.lastIndexOf('/');
        if (!vimeoId || vimeoId.indexOf('mp4') > -1){
        	//mp4 player로 보여준다!
        	return;
        }
        var vimeoCd = vimeoId.substr(idx+1);

        //같으면 중지하고 닫기
        if (curVimeoId === vimeoCd){
        	player.off('play', function(e){});
        	$('#made-in-ny').toggle();

        	return;
        }
        else{
        	$('#made-in-ny').show();
        }

        curVimeoId = vimeoCd;
        console.log('vimeoCd:%s', vimeoCd);
        //var vimeoCd = vimeoId.replace('https://player.vimeo.com/video/','');
        var options = {
            id: parseInt(vimeoCd) || 59777392,
            width: 640,
            loop: false
        };

        player = player || new Vimeo.Player('made-in-ny', options);
        player.loadVideo(options.id).then(function(id) {
            // the video successfully loaded
        });

        player.setVolume(10);

        player.on('play', function() {
            console.log('played the video!');
        });
    }

}
