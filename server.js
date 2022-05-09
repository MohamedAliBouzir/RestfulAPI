// imports
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
// instantiate server
var server = express();

//body parser configuration
server.use(bodyParser.urlencoded({ extended:true}));
server.use(bodyParser.json());

// routes configuring
server.get('/',function (req,res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Welcome in Med Ali & Ons Server</h1>');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function(){
    console.log('server is listenning');
});