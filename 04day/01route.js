(function(angular) {
  'use strict';

  var app = angular.module('demoApp', ['ngRoute']);

  app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
      templateUrl: 'tpl',
      controller: 'demoController'
    });
  }]);

  // 设置控制器
  app.controller('demoController', [
    '$scope',
    '$routeParams',
    function($scope,$routeParams){
      $scope.name = '小龙';
      console.log($scope);
      console.log($routeParams);
    }
  ]);

  


  // 不能使用箭头函数
  // app.controller('studentsController', ['$scope','$routeParams',($scope, $routeParams) => {
  //     console.log($routeParams);
  //   }
  // ]);

})(angular);
