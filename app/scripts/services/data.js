'use strict';

const angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    // let queue = [];
    // let req;

    // if (todo._id) {
    //   req = $http.delete('/api/todos/' + todo._id, todo);
    // }

    // queue.push(req);
    
    // return $q.all(queue).then( (results) => {
    //   console.log("I deleted the todo!");
    // });
  };
  
  this.saveTodos = function(todos) {
    let queue = [];
    
    todos.forEach( (todo) => {
      let req;

      if (!todo._id) {
        req = $http.post('/api/todos', todo);
      } else {
        req = $http.put('/api/todos/' + todo._id, todo).then( (result) => {
          todo = result.data.todo;
          return todo;
        });
      }

      queue.push(req);
    });
    
    return $q.all(queue).then( (results) => {
      console.log("I saved " + todos.length + " todos");
    });
  };
  
});
