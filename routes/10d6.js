var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(request, response) {
    response.sendFile('index.html');
  });

module.exports = exports = router;
