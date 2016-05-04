(function(angular) {
  'use strict';
  // 创建模块
  let app = angular.module('movie.coming_soon', ['ngRoute']);

  // 配置路由
  app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/coming_soon', {
        controller: 'coming_soonController',
        templateUrl: './coming_soon/coming_soon.html'
      });
  }]);

  // 创建控制器
  app.controller('coming_soonController', [
    '$scope',
    '$http',
    '$routeParams',
    function($scope, $http, $routeParams) {
      /*$scope.dataMovie = {
        "count": 3,
        "start": 1,
        "total": 25,
        "subjects": [{
          "rating": {
            "max": 10,
            "average": 6.3,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "动作",
            "犯罪",
            "惊悚"
          ],
          "title": "伦敦陷落",
          "casts": [{
            "alt": "https://movie.douban.com/celebrity/1040500/",
            "avatars": {
              "small": "http://img3.doubanio.com/img/celebrity/small/406.jpg",
              "large": "http://img3.doubanio.com/img/celebrity/large/406.jpg",
              "medium": "http://img3.doubanio.com/img/celebrity/medium/406.jpg"
            },
            "name": "杰拉德·巴特勒",
            "id": "1040500"
          }, {
            "alt": "https://movie.douban.com/celebrity/1053577/",
            "avatars": {
              "small": "http://img3.douban.com/img/celebrity/small/522.jpg",
              "large": "http://img3.douban.com/img/celebrity/large/522.jpg",
              "medium": "http://img3.douban.com/img/celebrity/medium/522.jpg"
            },
            "name": "艾伦·艾克哈特",
            "id": "1053577"
          }, {
            "alt": "https://movie.douban.com/celebrity/1054534/",
            "avatars": {
              "small": "http://img3.douban.com/img/celebrity/small/34642.jpg",
              "large": "http://img3.douban.com/img/celebrity/large/34642.jpg",
              "medium": "http://img3.douban.com/img/celebrity/medium/34642.jpg"
            },
            "name": "摩根·弗里曼",
            "id": "1054534"
          }],
          "collect_count": 23499,
          "original_title": "London Has Fallen",
          "subtype": "movie",
          "directors": [{
            "alt": "https://movie.douban.com/celebrity/1317990/",
            "avatars": {
              "small": "http://img3.douban.com/img/celebrity/small/42004.jpg",
              "large": "http://img3.douban.com/img/celebrity/large/42004.jpg",
              "medium": "http://img3.douban.com/img/celebrity/medium/42004.jpg"
            },
            "name": "巴巴克·纳加非",
            "id": "1317990"
          }],
          "year": "2016",
          "images": {
            "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2325735117.jpg",
            "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2325735117.jpg",
            "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2325735117.jpg"
          },
          "alt": "https://movie.douban.com/subject/25757186/",
          "id": "25757186"
        }, {
          "rating": {
            "max": 10,
            "average": 5.8,
            "stars": "30",
            "min": 0
          },
          "genres": [
            "动作",
            "犯罪",
            "悬疑"
          ],
          "title": "冰河追凶",
          "casts": [{
            "alt": "https://movie.douban.com/celebrity/1118167/",
            "avatars": {
              "small": "http://img3.doubanio.com/img/celebrity/small/746.jpg",
              "large": "http://img3.doubanio.com/img/celebrity/large/746.jpg",
              "medium": "http://img3.doubanio.com/img/celebrity/medium/746.jpg"
            },
            "name": "梁家辉",
            "id": "1118167"
          }, {
            "alt": "https://movie.douban.com/celebrity/1009179/",
            "avatars": {
              "small": "http://img3.douban.com/img/celebrity/small/1368762337.01.jpg",
              "large": "http://img3.douban.com/img/celebrity/large/1368762337.01.jpg",
              "medium": "http://img3.douban.com/img/celebrity/medium/1368762337.01.jpg"
            },
            "name": "佟大为",
            "id": "1009179"
          }, {
            "alt": "https://movie.douban.com/celebrity/1274224/",
            "avatars": {
              "small": "http://img3.doubanio.com/img/celebrity/small/36798.jpg",
              "large": "http://img3.doubanio.com/img/celebrity/large/36798.jpg",
              "medium": "http://img3.doubanio.com/img/celebrity/medium/36798.jpg"
            },
            "name": "周冬雨",
            "id": "1274224"
          }],
          "collect_count": 3509,
          "original_title": "冰河追凶",
          "subtype": "movie",
          "directors": [{
            "alt": "https://movie.douban.com/celebrity/1332058/",
            "avatars": {
              "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
              "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
              "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            },
            "name": "徐伟",
            "id": "1332058"
          }],
          "year": "2016",
          "images": {
            "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2325669527.jpg",
            "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2325669527.jpg",
            "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2325669527.jpg"
          },
          "alt": "https://movie.douban.com/subject/26315270/",
          "id": "26315270"
        }, {
          "rating": {
            "max": 10,
            "average": 8.2,
            "stars": "40",
            "min": 0
          },
          "genres": [
            "剧情",
            "家庭"
          ],
          "title": "垫底辣妹",
          "casts": [{
            "alt": "https://movie.douban.com/celebrity/1275528/",
            "avatars": {
              "small": "http://img3.douban.com/img/celebrity/small/1365943835.14.jpg",
              "large": "http://img3.douban.com/img/celebrity/large/1365943835.14.jpg",
              "medium": "http://img3.douban.com/img/celebrity/medium/1365943835.14.jpg"
            },
            "name": "有村架纯",
            "id": "1275528"
          }, {
            "alt": "https://movie.douban.com/celebrity/1111147/",
            "avatars": {
              "small": "http://img3.douban.com/img/celebrity/small/2984.jpg",
              "large": "http://img3.douban.com/img/celebrity/large/2984.jpg",
              "medium": "http://img3.douban.com/img/celebrity/medium/2984.jpg"
            },
            "name": "伊藤淳史",
            "id": "1111147"
          }, {
            "alt": "https://movie.douban.com/celebrity/1316808/",
            "avatars": {
              "small": "http://img3.doubanio.com/img/celebrity/small/1447661743.47.jpg",
              "large": "http://img3.doubanio.com/img/celebrity/large/1447661743.47.jpg",
              "medium": "http://img3.doubanio.com/img/celebrity/medium/1447661743.47.jpg"
            },
            "name": "吉田羊",
            "id": "1316808"
          }],
          "collect_count": 60966,
          "original_title": "ビリギャル",
          "subtype": "movie",
          "directors": [{
            "alt": "https://movie.douban.com/celebrity/1001640/",
            "avatars": {
              "small": "http://img3.doubanio.com/img/celebrity/small/9318.jpg",
              "large": "http://img3.doubanio.com/img/celebrity/large/9318.jpg",
              "medium": "http://img3.doubanio.com/img/celebrity/medium/9318.jpg"
            },
            "name": "土井裕泰",
            "id": "1001640"
          }],
          "year": "2015",
          "images": {
            "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2329080834.jpg",
            "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2329080834.jpg",
            "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2329080834.jpg"
          },
          "alt": "https://movie.douban.com/subject/26259677/",
          "id": "26259677"
        }],
        "title": "正在上映的电影-北京"
      }*/

      // 通过jsonp 来实现快跨域的时候在url中必须指定?callback = JSON_CALLBACAK
      // 当callback = JSON_BACK 的时候 将会执行success
      // 同样 callback也可以指定自定义的全局函数
      var myUrl = "https://api.github.com?callback=JSON_CALLBACK";
      var doubanAPI = 'http://api.douban.com/v2/movie/subject/1764796?callback=JSON_CALLBACK';
      let url = 'https://www.baidu.com?callback=JSON_CALLBACK';
      $http.get(url).success(function(data){
        console.log(data);
      });
      

    }
  ])
})(angular);
