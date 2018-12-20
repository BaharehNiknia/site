var cookieParser = require('cookie-parser');
var express=require('express');
var session = require('express-session');
var app=express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });
//app.get('/clear_cookie_foo', function(req, res){
 //   res.clearCookie('foo');
 //   res.send('cookie foo cleared');
 //});
//app.get('/', function(req, res){
 //   res.cookie('name', 'express').send('cookie set'); //Sets name = express
    //This cookie also expires after 360000 ms from the time it is set.
//res.cookie(name, 'value', {maxAge: 1000});
//Expires after 360000 ms from the time it is set.
//res.cookie(name, 'value', {expire: 360000 + Date.now()});
 //});

app.listen(3000);
