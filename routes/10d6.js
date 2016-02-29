var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.sendFile('index.html');
  });

module.exports = exports = router;
