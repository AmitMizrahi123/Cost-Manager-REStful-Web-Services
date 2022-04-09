var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var host = "127.0.0.1";
var port = "8080";

var server = app.listen(8080, function () {
   console.log("Example app listening at http://%s:%s", host, port)
})