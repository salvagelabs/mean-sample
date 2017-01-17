'use strict';

const express = require('express'),
    app = express(),
    router = require('./api/router');

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use('/api', router);

app.listen(3000, "localhost", () => {
    console.log('Server is running.');
});