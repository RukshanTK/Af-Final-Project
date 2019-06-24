var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');


var courses = require('./routes/capi');

var index = express();

// view engine setup
index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'pug');

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(cookieParser());
index.use(express.static(path.join(__dirname, 'public')));


index.use('/courses', courses);


// catch 404 and forward to error handler
index.use(function(req, res, next) {
  next(createError(404));
});

// error handler
index.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.index.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
mongoose.connect('mongodb://localhost/courseWeb');
mongoose.Promise = global.Promise;
index.use(express.static('public'));
index.use(bodyParser.json());
index.use(cors());
index.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message})
});
index.listen(process.env.port || 4001, function () {

  console.log("Now listening for requests");
});

