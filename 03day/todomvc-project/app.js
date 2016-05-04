(function(w) {
  'use strict';

  // 创建模块和控制器
  angular.module('todoApp', [])
    .controller('todoController', ['$scope', ($scope) => {
      // 伪造一堆数据
      var dataFake = [
        { id: 1, name: '睡觉', completed: false },
        { id: 2, name: '吃饭', completed: true },
        { id: 3, name: '看NBA', completed: false },
        { id: 4, name: '玩LOL', completed: false }
      ];

      // 1.显示任务列表
      $scope.tasks = dataFake;

      // 2.添加任务
      $scope.newTask = '';
      $scope.add = () => {
        // 判断输入框是否有值,若无，直接返回
        if (!$scope.newTask) return;
        let newTaskId = 1;
        if (dataFake.length) {
          newTaskId = dataFake[dataFake.length - 1].id + 1;
        }
        // 若有值，直接将输入的数据添加到dataFake中
        dataFake.push({
          id: newTaskId,
          name: $scope.newTask,
          completed: false
        });
        // 当一个任务添加完成后 清空输入框的值
        $scope.newTask = '';
      };

      // 3.删除任务
      $scope.destroy = (id) => {
        // 若没要删除的数据直接返回
        if (!id) return;
        // 根据id来查找需删除的任务
        var delId = dataFake.find((item, id) => { item.id = id });
        dataFake.splice(delId, 1);
      };

      // 4.修改任务
      $scope.isEditId = -1;
      $scope.edit = (id) => {
        $scope.isEditId = id;
      };

      $scope.save = () => {
        $scope.isEditId = -1;
      };

      // 5.切换任务是否完成的状态
      // 直接在index.html中文件中 添加 ng-model = 'item.completed'

      // 6.批量切换任务状态
      let isAllCompleted = true;
      $scope.markAll = () => {
        // 将所有的completed 设置为true
        dataFake.forEach((item, index) => { item.completed = isAllCompleted; });
        isAllCompleted = !isAllCompleted
      };

      // 7.显示未完成的任务数量 
      $scope.$watch('tasks', (now, old) => {
        $scope.leftItem = 0;
        dataFake.forEach((item, index) => {
          if (!item.completed) {
            $scope.leftItem++;
          }
        });
      }, true);

      // 8.清除所有已完成任务。   
      $scope.clearAll = () => {
        let tempArr = [];
        dataFake.forEach((item, index) => {
          if (!item.completed) {
            tempArr.push(item);
          }
        });
        $scope.tasks = tempArr;
        // console.log($scope.tasks)
        // console.log(dataFake);
      };

      // 8.1 当没有已完成的任务 隐藏 清除按钮
      $scope.isShow = () =>{
        return $scope.tasks.some((item, index) => {
          return item.completed == true;
        });
      };


      // 9.切换不同状态任务的显示。
      $scope.isCompleted = {};
      $scope.active = () => {
        $scope.isCompleted = { completed: false };
      };
      $scope.completed = () => {
        $scope.isCompleted = { completed: true };
      };
      $scope.all = () => {
        $scope.isCompleted = {};
      };

    }]);
})(window);
