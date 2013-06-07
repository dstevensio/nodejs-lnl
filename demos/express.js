var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello, world! Zoooooom!");
});

app.listen(3000);
console.log("Express app running - http://localhost:3000");
