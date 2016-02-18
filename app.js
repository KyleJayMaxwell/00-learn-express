var express = require('express'),
  app = express();

var vegetables = [
  'Carrots',
  'Cucumber',
  'Peas'
];

//declared port
var port = 3333;

// WHEN the app loads for the first time, register "ejs" as the templating language
// http://www.embeddedjs.com/
app.set('view engine', 'ejs');

// WHEN a user visits the homepage
app.get('/', function(req, res){
  // THEN read the file named index.ejs, and do some text replacing
  // such that <%= name %> becomes "Elie"
  res.render('index', {name: 'Elie'});
});


// when a user visits the home page
app.get("/", function (req, res) {
  //Then send back the response: 'Hello World'
  res.send('Hello World');
});

//When a user goes to localhost/vegetables
app.get("/vegetables", function(req, res){
  res.send(vegetables.join(", "));
});

// When user goes to meaning-of-life they see "42"
app.get("/meaning-of-life", function(req, res){
  res.send("42");
});

// Start the server and make our web app available on localhost 3333
app.listen(port, function (){
  console.log("Starting a server on localhost:"+port)
});

// When someone goes to hello/name they will get their name back
app.get('/hello/:name', function(req, res){
  res.send('Hello, '+ req.params.name);
});

// Grabs the company name and the product name to show the client
app.get('/companies/:company/products/:productName', function(req, res){
  res.send(req.params.company + ' makes the ' + req.params.productName );
});

//query parameters

// WHEN someone visits /greeting?name=Sue
// THEN set req.query to an object that looks like {name: "Sue"}
app.get('/hi', function(req, res){
  var name = req.query.name;
  res.send('Hello, '+ name);
});

// WHEN someone visits /greeting?first=Joe&last=Jones
// THEN set req.query to an object that looks like {first: "Joe", last: "Jones"}
app.get('/greeting', function(req, res){
  res.send('Hello, '+ [req.query.first, req.query.last].join(" "));
});