var express = require('express');
var router = express.Router();
var imgsArr1apis = require('../data/imgsArr1')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    res.json(imgsArr1apis)
});

module.exports = router;
