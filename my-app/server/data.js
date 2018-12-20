var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});

var Person = mongoose.model("Person", personSchema);

app.get('/people', function(req, res){
  // Person.find(function(err, response){
   //   res.json(response);
  // }
  res.send('Sorry, this is an invalid URL.')
   
   //);
});

app.listen(3000);