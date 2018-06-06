var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookstore = require('./routes/bookstore');
var loginRouter = require('./routes/login');
var secretRouter = require('./routes/secret');
var passport = require("passport");
var bodyParser = require("body-parser");

var app = express();
app.use(fileUpload());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize());
// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header('Access-Control-Allow-Headers: X-Requested-With');
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', bookstore);
app.use('/login', loginRouter);
app.use('/secret', secretRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
