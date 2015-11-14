
'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.status(201).send({ datetime: '2015-11-13T20:00:00.000Z' });
});

module.exports = router;
