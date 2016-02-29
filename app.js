var express = require('express');
var app = express();
var router = require('./routes/10d6');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(10600, function() {
  console.log('Listening on port 10600...');
});
