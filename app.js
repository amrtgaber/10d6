var express = require('express');
var app = express();
var router = require('./routes/10d6');

app.use(express.static('public'));
app.use('/', router);

app.listen(10600, function() {
  console.log('Listening on port 10600...');
});
