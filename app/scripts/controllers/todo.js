'use strict';

const angular = require('angular');

angular.module('todoListApp')
.controller('todoCtrl', function($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo;
      };
    })
    dataService.saveTodos(filteredTodos).finally($scope.resetToDoState);
  }; 

  $scope.resetToDoState = () => {
    $scope.todos.forEach( (todo) => {
      todo.edited = false;
    });
  };

});