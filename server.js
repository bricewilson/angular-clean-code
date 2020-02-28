var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./server/routes/index');
var readers = require('./server/routes/readers');
var books = require('./server/routes/books');

var app = express();

app.use(favicon(path.join(__dirname, 'dist/booktracker/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/booktracker')));

// app.use('/', routes);
app.use('/api/readers', readers);
app.use('/api/books', books);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/booktracker/index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
