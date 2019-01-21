var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
/**
 * 导入路由
 */
var indexapis = require('./routes/indexapis')
var plantapis = require('./routes/plantapis')
var businessareaapis = require('./routes/businessareaapis')
var myapis = require('./routes/myapis')
var productFenleiInfoapis =require('./routes/productFenleiInfoapis')
var productapis = require('./routes/product')
var imgsArr1apis = require('./routes/imgsArr1apis')
var imgsArr2apis = require('./routes/imgsArr2apis')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
/**
 * 注册跟路由
 */
app.use('/indexapis',indexapis);
app.use('/plantapis',plantapis);
app.use('/businessareaapis',businessareaapis)
app.use('/myapis',myapis)
app.use('/productFenleiInfoapis',productFenleiInfoapis)
app.use('/productapis',productapis)
app.use('/imgsArr1apis',imgsArr1apis)
app.use('/imgsArr2apis',imgsArr2apis)
module.exports = app;
