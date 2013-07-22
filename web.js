var express = require('express');
var fs = require('fs');
var buff = new Buffer(fs.readFileSync("index.html"));
var content = buff.toString();

// console.log(content);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
