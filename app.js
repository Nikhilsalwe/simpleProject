var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routerExample = require('./routeDynamic');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Body parser use JSON data

app.use(routerExample);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});