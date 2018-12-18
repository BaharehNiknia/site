var express = require('express');
var app = express();

app.get('/server', function(req, res){
   res.send("Hello World!");
});

app.listen(3004);