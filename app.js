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