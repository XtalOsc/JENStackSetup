var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var port = process.env.PORT || 8082;

//static folder
app.use(express.static('public'));

//spin up server
app.listen(port, function(){
  console.log('server listening on ',port);
});

//base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile('index.html');
});

//test post route
app.post('/poster', urlencodedParser,function(req, res){
  console.log('/poster hit', req.body);
  //assemble object to return
  var objectToReturn={
    response: 'from server'
  }

  //return object to client
  res.send(objectToReturn);
});
