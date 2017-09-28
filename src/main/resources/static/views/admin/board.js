angular
    .module('app')
    .controller('BoardController', BoardController);
BoardController.$inject = ['$anchorScroll', '$http', '$log', '$uibModal','config', 'RestfulService','AlertService'];

function BoardController($anchorScroll, $http, $log, $uibModal, config, RestfulService, AlertService) {
    var vm = this;

    vm.list = {};
    vm.list2 = {};

    //default value
    var sortInfo = 'seqNum DESC';	//sorting QUERY entity
    vm.pageSize = 10;
    vm.page = 1;

    //inject method
    vm.pageSizes = config.pageSizes;
    vm.sort = sort;
    vm.searchBoard = search1;
    vm.searchBroadcast = search2;
    vm.pageChanged = pageChanged;
    vm.pageSizeChanged = pageSizeChanged;

    cntr = vm;

    //Set Sorting
    function sort(column){

    	sortInfo = column + (sortInfo.indexOf('DESC') > 0 ? ' ASC' : ' DESC');
    	search();
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
    //Board
    function search1(page) {
        var options = {};

        if (page){	//새로조회시에만 totalCount 수행되어야 성능에 좋은 이유!
        	//get totalCount
        	getTotalCount1();
        	vm.page = angular.isNumber(page) ? page : 1;	//set firstPage
        }

        options.domain = 'board';
        options.action = 'findAll';
        options.key = 'full';	//onePage|full

        options.sort = 'regDate DESC';	//기본 정렬

        for (var e in vm.options){
        	options[e] = vm.options[e];
        }
        options.pageSize = options.pageSize || vm.pageSize;
        options.sort = options.sort || sortInfo;	//sort가 없으면 기본값 세팅
        options.page = vm.page;
        options.boardId = 'PHOTO_01';	//Gallery

        RestfulService.query(
            options,
            function(result,headers) {
                var resultObject = angular.copy(result.message.result);
                vm.list = resultObject.list;

                AlertService.success('정보조회', '게시판 목록을 조회했습니다.');

                search2(page);	//Broadcast조회수행
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
    function getTotalCount1(){
        var options = {};

        options.domain = 'board';
        options.action = 'findAll';
        options.key = 'totalCount';

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

    //Broadcast
    function search2(page){
    	vm.editItem = null;
        var options = {};

        if (page){	//새로조회시에만 totalCount 수행되어야 성능에 좋은 이유!
        	//get totalCount
        	getTotalCount2();
        	vm.page = page || 1;	//set firstPage
        }

        options.domain = 'broadcast';
        options.action = 'findAll';
        options.key = 'onePage';

        options.sort = 'seqNum DESC';	//기본 정렬
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
                vm.list2 = resultObject.list;
                if (searchEnd_broadcast){
                	searchEnd_broadcast(vm.list2);
                }

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
    function getTotalCount2(){
        var options = {};

        options.domain = 'broadcast';
        options.action = 'findAll';
        options.key = 'totalCount';

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

}
