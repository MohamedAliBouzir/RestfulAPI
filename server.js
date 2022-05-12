// imports
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
// instantiate server
var server = express();

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Access-Control-Allow-Headers, https://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, ');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
      res.header('Access-Control-Allow-Credentials', true);
      return res.status(200).json({});

  };
    next();
  });

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