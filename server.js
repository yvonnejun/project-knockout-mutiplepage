var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

// app.use('/business', proxy({target: 'http://10.4.3.99:8090/bigdata', changeOrigin: true}));


app.use('/', express.static('./views'));
app.use('/resources', express.static('./resources'));

// var server = http.createServer(function(req,res){
//   res.setHeader('Content-Type','text/plain');
//   res.end("hello nodejs");

// });
var server = app.listen(8866, function () {
  console.log('Server start port:8866');
});