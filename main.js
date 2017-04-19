var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

var message = "Hello, phoenix! Boom!";

app.get('/', function(req,res){
    res.send(message);
});

app.listen(PORT, function(){
    console.log(`hello-phoenix started on port ${PORT}`);
});