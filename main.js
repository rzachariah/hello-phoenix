var express = require('express');
var app = express();

var message = "Hello, phoenix! Boom!";

app.get('/', function(req,res){
    res.send(message);
});

app.listen(80, function(){
    console.log('hello-phoenix started');
});