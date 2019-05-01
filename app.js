var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});
app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req,res) {
  var data = {age: 20, job: 'student', hobbies: ['eating', 'games', 'netflix']};
  res.render('profile', {person: req.params.name, data: data});

});

app.listen(3000);









/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('request made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/kat') {
    var myObj = [{name: 'kat', age: 20}, {name: 'jade', age:'21'}];
    res.writeHead(200, {'Conent-Type' : 'application/json'});
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/error.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('worked');

*/


//util
//var util = require('util');

//var Person = function(name){
  //this.name = name;
//};

//util.inherits(Person, events.EventEmitter);

//var kat = new Person('kat');
//var jr = new Person('jr');
//var aaliyah = new Person('aaliyah');
//var people = [kat, jr, aaliyah];

//people.forEach(function(person){

//person.on('speak', function(msg){
  //console.log(person.name + ' said: ' + msg);
//});

//});

//kat.emit('speak', 'hey dudes');
//jr.emit('speak', 'lozer');

//modules
//console.log(stuff.counter(['kat', 'jade', 'emily', 'rayna']));
//console.log(stuff.adder(5,6));
//console.log(stuff.adder(stuff.pi, 5));
