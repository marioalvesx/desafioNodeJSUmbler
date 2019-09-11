var express = require('express');
var app = express();
var data = new Date();

var requestTime = function (req, res, next) {
  var hour = data.getHours();
  var min = data.getMinutes();
  req.requestTime = ""+hour+":"+min;
  next();
}

app.use(requestTime);

app.get('/', function (req, res) {
  var responseText = 'Hello World';
  responseText += ' ' + req.requestTime + '';
  res.send(responseText);
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});