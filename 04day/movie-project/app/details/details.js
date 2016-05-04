(function(angular) {
  // 创建详情页模块
  let app = angular.module('movie.details', ['ngRoute']);

  // 配置路由
  app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/details', {
        templateUrl: './details/details.html'
      })
  }]);

})(angular);
