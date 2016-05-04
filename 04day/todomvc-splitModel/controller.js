(function(angular) {
  'use strict';
  // 获取模块
  var app = angular.module('todoApp');

  // 配置路由
  app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/:state', {
        controller: 'todoController',
        templateUrl: 'tpl'
      })
      .when('/',{
        controller: 'todoController',
        templateUrl: 'tpl'
      });
  }]);

  // 设置控制器
  app.controller('todoController', [
    '$scope',
    '$routeParams',
    'todoService',
    function($scope, $routeParams, todoService) {
      //  console.log(todoService);   // 得到 一个对象

      // 1.显示任务列表
      $scope.tasks = todoService.get();

      // 2.添加任务

      $scope.newTask = '';
      $scope.add = () => {
        todoService.add($scope.newTask);

        // 当一个任务添加完成后 清空输入框的值
        $scope.newTask = '';
      };

      // 3.删除任务
      $scope.destroy = (id) => {
        todoService.destroy(id);
      };

      // 4.修改任务
      $scope.isEditId = -1;
      $scope.edit = (id) => {
        $scope.isEditId = id
      };

      $scope.save = () => {
        $scope.isEditId = -1;
        todoService.save();
      };

      // 5.切换任务是否完成的状态
      // 直接在index.html中文件中 添加 ng-model = 'item.completed'

      // 6.批量切换任务状态
      let isAllCompleted = true;
      $scope.markAll = () => {
        todoService.markAll(isAllCompleted);
        isAllCompleted = !isAllCompleted;
      };

      // 7.显示未完成的任务数量 
      $scope.$watch('tasks', (now, old) => {
        $scope.leftItem = todoService.showLeftItem();
        todoService.save(); // 保存 记录任务是否已经完成
      }, true);

      // 8.清除所有已完成任务   
      $scope.clearAll = () => {
        todoService.clearAll();
        $scope.tasks = todoService.get();
      };

      // 8.1 当没有已完成的任务 隐藏 清除按钮
      $scope.isShow = () => {
        return todoService.isShow();
      };


      // 9.切换不同状态任务的显示。
      $scope.isCompleted = {};

      console.log($routeParams);
      switch ($routeParams.state) {
        case 'active':
          $scope.isCompleted = { completed: false };
          break;
        case 'completed':
          $scope.isCompleted = { completed: true };
          break;
        default:
          $scope.isCompleted = {};
          break;    
      }
    }
  ]);
})(angular);
