var express = require('express'),
  app = express();

var vegetables = [
  'Carrots',
  'Cucumber',
  'Peas'
];

//declared port
var port = 3333;


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
app.get('/hi', function(req, res){
  var name = req.query.name;
  res.send('Hello, '+ name);
});

app.get('/greeting', function(req, res){
  res.send('Hello, '+ [req.query.first, req.query.last].join(" "));
});