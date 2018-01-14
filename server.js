var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
var path = require("path");
var router = require('./fileRoute');


router.setRootPath(__dirname);

router.get('/', function(req, res){
    // 文件首页
    router.sendFile(res, "/index.html");
});


const srv = http.createServer((req, res) => {
    router.init(req, res);
})

// 监听端口
srv.listen(8080);
