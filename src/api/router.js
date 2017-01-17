'use strict';

const express = require('express'),
    router = express.Router(),
    Todo = require('../models/todo');

router.get('/todos', (req,res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todos: todos});
    });
});

// TODO: Add POST route for new entries

// TODO: Add PUT route to update entries

// TODO: Add DELETE route to delete entries

module.exports = router;