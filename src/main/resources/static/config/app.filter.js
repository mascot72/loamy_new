(function() {
    'use strict';

    var gradeFlagHash = {
        '1' : 'WHITE',
        '2' : 'GREEN',
        '3' : 'PINK',
        '4' : 'RED',
        '5' : 'RED GRAY',
        '6' : 'BLACK',
        '7' : 'GREEN GRAY',
        '8' : 'PINK GRAY',
        '9' : 'PINK MACHINE'
    };

    angular
        .module('app')
        .filter('sourceCodeFilter', sourceCodeFilter)
        .filter('propsFilter', propsFilter)
    	  .filter('htmlToPlaintext', function() {
	        return function(text) {
	            return text ? String(text).replace(/<[^>]+>/gm, '') : '';
	        };
        })
        .filter('vimeoCd', function(){	//Vimeo Code구하기
        	return function(text){

        		var idx = text.lastIndexOf('/');
        		alert('text:'+ text);
                if (!text || text.indexOf('mp4') > -1){
                	return '';
                }

        		return text.substr(idx+1);
        	};
        });

    sourceCodeFilter.$inject = ['$log'];

    function sourceCodeFilter($log) {
        return function (items, sourceCode) {

            if (angular.isArray(items)) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i]['sourceCode'] == sourceCode) {
                        return items[i]['sourceCode'] + ' <' + items[i]['name'] + '>';
                    }
                }
                return sourceCode;
            }

            $log.info("sourceCodeFilter 오류가 있습니다. items = " + items);
            return sourceCode;
        };
    }

    function propsFilter() {
        return function(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    }

})();
