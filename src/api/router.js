'use strict';

const express = require('express'),
    router = express.Router();
let todos = require('../../mock/todos.json');

router.get('/todos', (req,res) => {
    res.json(todos);
});

// TODO: Add POST route for new entries

// TODO: Add PUT route to update entries

// TODO: Add DELETE route to delete entries

module.exports = router;