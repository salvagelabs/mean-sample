'use strict';

var express = require('express'),
    app = express();

app.use('/', express.static('public'));

app.listen(3000, "localhost", () => {
    console.log('Server is running.');
});