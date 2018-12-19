var express = require('express');
var app = express();
//var things=require("./things.js");
//app.use('/things',things);

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/components', function(req, res){
   res.render('content');
});

//app.get('/dynamic', function(req, res){
//   res.render('dynamic',{
//      user: {name: "Ayush", age: "20"}
 //  });
//});

//app.get('/first_template', function(req, res){
//   res.render('first_view');
//});

//app.get('/dynamic_view', function(req, res){
//   res.render('dynamic', {
 //     name: "TutorialsPoint", 
 //     url:"http://www.tutorialspoint.com"
 //  });
//});


//app.get('/things/:id', function(req, res){
//   res.send('The id you specified is ' + req.params.id);
//});
//Other routes here
//app.get('*', function(req, res){
 //   res.send('Sorry, this is an invalid URL.');
 //});

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