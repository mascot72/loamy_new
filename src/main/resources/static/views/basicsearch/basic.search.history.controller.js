/**
 * 기본조회 컨트롤러
 * Created by onedge on 15. 3. 18..
 */
angular
    .module('app')
    .controller('BasicSearchHistoryController', BasicSearchHistoryController);

BasicSearchHistoryController.$inject = ['$anchorScroll', '$http'];

function BasicSearchHistoryController($anchorScroll, $http) {
    var vm = this;
    vm.options = {};

    vm.useYns = [
        {id : 'Y', name : '노출'},
        {id : 'N', name : '미노출'}];
    vm.pageSizes = [10, 20, 30, 40, 50]
    vm.options.pageSize = vm.pageSizes[0];

    // toast message
    var msg = {};

    // paging
    vm.pageChanged = pageChanged;

    // 데이타 조회
    vm.search = search;

    // 히스토리 조회
    vm.showHistory = showHistory;
    /**
     * 페이지 호출되면서 검색수행
     */
    search();


    /**
     * 페이지 로딩시
     * 조회 버튼 클릭시
     */
    function search() {

        // json loading
        $http.get('views/basicsearch/sample.json').success(
            function(data) {
                vm.list = data.message.result.list;
                vm.options.totalCount = 500;
                vm.options.pageSize = 10;
            }
        );
    }

    /**
     * paging을 변경하였을 경우
     */
    function pageChanged() {
         if (vm.options.totalCount <= 0)
             return;
        
         // 상단으로 이동
         //$location.hash('partialAutoWord');
         //$anchorScroll();
         search();
    }

    function showHistory(rowEntity) {
        console.log(rowEntity)
        rowEntity.showHistory = !rowEntity.showHistory;

        // 하나의 entity만 이력보기가 가능하게 함
        angular.forEach(vm.list, function(value){
            if (rowEntity.id != value.id)
                value.showHistory = false;
        });

        // history 조회가 되면 안된다.
        if (!rowEntity.showHistory) {
            return;
        }

        // get history from database
        getHistoryData(rowEntity);
    }

    function getHistoryData(rowEntity) {
        // HistoryRepositoryService.get({type: 'ContextSearch', relId: rowEntity.id},
        //     function (result, headers) {
        //         var message = result.message;
        //
        //         if (message.error != null) {
        //             if (message.error.message != null) {
        //                 msg.message = message.error.message;
        //             } else {
        //                 msg.message = '히스토리 정보 조회중 오류가 발생했습니다.';
        //             }
        //
        //             AlertService.error('히스토리 정보 조회', msg.message);
        //         } else if (message.result != null) {
        //             vm.historyList = message.result.list;
        //
        //             AlertService.success('히스토리 정보 조회', '히스토리 정보를 조회했습니다.');
        //         } else {
        //             AlertService.error('히스토리 정보 조회', '히스토리 정보 조회중 오류가 발생했습니다.');
        //         }
        //     },
        //     function (error) {
        //         AlertService.error('히스토리 정보 조회', '히스토리 정보 조회중 통신오류가 발생했습니다.');
        //     }
        // );


        // json loading
        $http.get('views/basicsearch/sample_history.json').success(
            function(data) {
                vm.historyList = data.message.result.list;
            }
        );
    }
}