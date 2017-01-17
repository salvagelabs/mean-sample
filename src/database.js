'use strict';

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', (err) => {
    if (err) {
        console.log('Connection failed.');
    } else {
        console.log('Mongo connection successful.');
    }
});