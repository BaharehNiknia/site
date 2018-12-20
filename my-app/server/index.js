var express=require('express');
var app=express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');
app.set('view engine', 'pug');
app.set('views','./views');
var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var Person = mongoose.model("Person", personSchema);
app.get('/person', function(req, res){
   res.render('person');
});
app.post('/person', function(req, res){
   var personInfo = req.body; //Get the parsed information
   console.log("hi");
   console.log(personInfo);
   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"});
   } else {
      var newPerson = new Person({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });
		
      newPerson.save(function(err, Person){
         if(err)
            res.render('show_message', {message: "Database error", type: "error"});
         else
            res.render('show_message', {
               message: "New person added", type: "success", person: personInfo});
      });
   }
});

Person.find(function(err, response){
   console.log(response);
});




//var express = require('express');
//var app = express();
//var things=require("./things.js");
//app.use('/things',things);








//app.set('view engine', 'pug');
//app.set('views','./views');

//app.get('/components', function(req, res){
 //  res.render('content');
//});

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