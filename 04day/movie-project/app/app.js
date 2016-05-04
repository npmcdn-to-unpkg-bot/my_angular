(function(angular) {
  "use strict";

  // start your ride
  // 创建 主模块 
  let app = angular.module('movieApp', [
    'movie.home_page',
    'movie.coming_soon',
    'movie.details'
  ]);

})(angular);
