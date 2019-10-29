var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(parser.json());


app.use(express.static('client'));


app.get('/', function (req, res) {
    res.sendfile('index.html');
  });
  app.post('/upload_json', (req, res) => {

    });
  app.use(express.static('public'));

app.listen(3000, function(){
    console.log("Listening on port 3000!")
  });

