'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstApp
 */
var app = angular.module('firstApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.message = 'Tap Me!';
  })
  .directive("tap", function(){
  return function (scope, elem, attrs){
    elem.on("touchstart touched", function(){
      scope.$apply(attrs["tap"]);
    });
  }
});
