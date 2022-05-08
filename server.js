// imports
var express = require('express');

// instantiate server
var server = express();

// routes configuring
server.get('/',function (req,res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Welcome in Med Ali & Ons Server</h1>');
});


// Launch server
server.listen(8080, function(){
    console.log('server is listenning');
});