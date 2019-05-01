var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('stories', {qs: req.query});
});

app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('story-success', {data: req.body});
});

app.listen(3000);
//HEROKU
