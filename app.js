var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./api/banner');
var usersRouter = require('./api/users');
var aaa = require('./api/aaa');
var main = require('./api/main');
var list = require('./api/list');
var pingtai = require('./api/pingtai');
var gonggao = require('./api/gonggao');
var register = require('./api/register');
var qian = require('./api/qian');
var bbb = require('./api/bbb');
var tode = require('./api/tode');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    if (req.method == 'OPTIONS') {
        /*让options请求快速返回*/
        res.send(200);
    }
    else {
        next();
    }
});






app.use('/api/banner', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/aaa', aaa);
app.use('/api/main', main);
app.use('/api/list', list);
app.use('/api/pingtai', pingtai);
app.use('/api/gonggao', gonggao);
app.use('/api/register', register);
app.use('/api/qian', qian);
app.use('/api/bbb', bbb);
app.use('/api/tode', tode);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
