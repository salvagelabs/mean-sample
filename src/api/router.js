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
router.post('/todos', (req,res) => {
    let todo = req.body;
    Todo.create(todo, (err, todo) => {
        if (err) {
            return res.status(500).json({err: err.message});
        }
        res.send({'todo': todo, message: 'Todo created.'});
    });
});

// TODO: Add PUT route to update entries
router.put('/todos/:id', (req,res) => {
    let id = req.params.id;
    let todo = req.body;

    if (todo && todo._id !== id) {
        return res.status(500).json({err: 'Ids do not match.'});
    }

    Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo) => {
        if (err) {
            return res.status(500).json({err: err.message});
        }
        res.send({'todo': todo, message: 'Todo updated.'});
    });

});

// TODO: Add DELETE route to delete entries
router.delete('/todos/:id', (req,res) => {
    let id = req.params.id;
    // let todo = req.body;

    // if (todo && todo._id !== id) {
    //     return res.status(500).json({err: 'Ids do not match.'});
    // }

    Todo.findByIdAndRemove(id, (err, todo) => {
        if (err) {
            return res.status(500).json({err: err.message});
        }
        res.json({message: 'Todo deleted.'});
    });
});

module.exports = router;