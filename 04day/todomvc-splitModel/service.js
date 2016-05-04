// 处理数据
(function(angular) {
  'use strict';
  // 获取模块
  let app = angular.module('todoApp');

  // 创建服务
  app.service('todoService', ['$window', function($window) {
    // 通过浏览器的localStorage 来存储数据
    let storage = $window.localStorage;

    // （从localStorage中获取数据）将字符串转换成json对象
    let tasks = JSON.parse(storage.getItem('tasks') || '[]');

    // 将数据保存在localStorage中
    this.save = () => {
      storage.setItem('tasks', JSON.stringify(tasks));
    };

    // 1.显示所有的任务
    this.get = () => tasks; // this.get = function(){return tasks;}

    // 2.添加任务
    this.add = (newTask) => {
      // 判断输入框是否有值,若无，直接返回
      if (!newTask) return;
      let newTaskId = 1;
      if (tasks.length) {
        newTaskId = tasks[tasks.length - 1].id + 1;
      }
      // 若有值，直接将输入的数据添加到tasks中
      tasks.push({
        id: newTaskId,
        name: newTask,
        completed: false
      });
      this.save();
    }

    // 3.删除任务
    this.destroy = (id) => {
      // 若没要删除的数据直接返回
      if (!id) return;
      // 根据id来查找需删除的任务
      let delId = tasks.find((item, id) => { item.id = id });
      tasks.splice(delId, 1);
      this.save();
    };

    // 5.切换任务是否完成

    // 6.批量切换任务状态
    this.markAll = (isAllCompleted) => {
      // 将所有的completed 设置为true
      tasks.forEach((item, index) => { item.completed = isAllCompleted; });
      this.save();
    };

    // 7.显示未完成的任务数量
    this.showLeftItem = () => {
      let leftItem = 0;
      tasks.forEach((item, index) => {
        if (!item.completed) leftItem++;
      });
      return leftItem;
    };

    // 8.清除所有已完成任务
    this.clearAll = () => {
      let tempArr = [];
      tasks.forEach((item, index) => {
        if (!item.completed) {
          tempArr.push(item);
        }
      });
      tasks = tempArr;
      this.save();
    };

    // 8.1 当没有已完成的任务 隐藏 清除按钮
    this.isShow = () => {
      return tasks.some((item, index) => {
        return item.completed == true;
      });
    }

  }]);
})(angular);
