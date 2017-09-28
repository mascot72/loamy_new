(function () {
    "use strict";

    angular.module("app")
        .constant(
            'config', {
                useYns : [
                    {id : 'Y', name : '노출'},
                    {id : 'N', name : '미노출'},
                ],
                pageSizes : [10, 20, 30, 40, 50],
                keywordSearchOptions : [
                    {id : 'exact', name : '정확', selected : true},
                    {id : 'forward', name : '전방'},
                    {id : 'backward', name : '후방'}
                ],
                systems : [
                    {id : 'UDB', name : 'UDB'},
                    {id : 'ACK', name : 'ACK - 자동완성'},
                    {id : 'AMD', name : 'AMD - 연관검색어'}
                ],
                excelRepositoryStatuses : [
                    {id : 'request', name : 'Excel 생성 요청'},
                    {id : 'success', name : 'Excel 생성 성공'},
                    {id : 'fail', name : 'Excel 생성 실패'}
                ]
             }
        )
    ;
})();
