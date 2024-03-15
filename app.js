var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const categoriesRouter = require('./routes/categories');

var app = express();
const mongoose = require('mongoose');
const compression = require('compression');
mongoose.set('strictQuery', false);
const dev_db_url = "mongodb+srv://bhaskarbordoloi:OzpLy2lvJEw3LR71@cluster0.llcewnk.mongodb.net/inventory_data?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB =  dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(compression());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/categories', categoriesRouter);

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
