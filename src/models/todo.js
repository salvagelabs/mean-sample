'use strict';

let mongoose = require('mongoose');

// todo.name
// to.complete

let todoSchema = new mongoose.Schema({
    name: String,
    complete: Boolean
});

let model = mongoose.model('Todo', todoSchema);

module.exports = model;