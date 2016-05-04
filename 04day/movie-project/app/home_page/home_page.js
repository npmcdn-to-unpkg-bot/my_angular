(function(angular) {
  'use strict';

  // 创建 home_page 模块
  let app = angular.module('movie.home_page', ['ngRoute']);

  // 配置路由
  app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/', {
        // 这里的路径是 'index.html' （即首页所在的路径）的相对路径
        templateUrl: './home_page/home_page.html',
        controller: 'home_pageController'
      })
  }]);


  // 创建控制器
  app.controller('home_pageController', [
    '$scope',
    '$routeParams',
    function($scope,$routeParams){
     

    }
  ]);
})(angular);
