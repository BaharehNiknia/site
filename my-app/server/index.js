var express = require('express');
var app = express();
//var things=require("./things.js");
//app.use('/things',things);


app.get('/things/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
//Other routes here
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(3000);



//app.get('/server', function(req, res){
//   res.send("Hello World 11!");
//});
//app.post('/server', function(req, res){
 //  res.send("Post called!");
//});
//app.all('/server', function(req, res){
 //  res.send("HTTP method doesn't have any effect on this route!");
//});


//app.listen(3004);