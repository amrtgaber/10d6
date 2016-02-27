var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(request, response) {
        res.sendFile('index.html');
    });

module.exports = exports = router;
