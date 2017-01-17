'use strict';

let Todo = require('./models/todo.js');

let todos = [
    'Clean',
    'Water',
    'Feed',
    'Pay',
    'Run',
    'Swim'
];

todos.forEach( (todo,index) => {
    Todo.find({'name': todo}, (err,todos) => {
        if (!err && !todos.length) {
            Todo.create({complete: false, name: todo});
        }
    });
});