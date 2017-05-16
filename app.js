var express = require('express'), http = require('http');
var app = express();



var mysql = require('mysql');


app.get('/', function (req, res) {
    res.send('Wow');
});

app.get('/users', function (req, res) {
    res.send('Wow');
});

app.get('/user/:userid', function (req, res) {
	var docClient = new AWS.
	
});

app.listen(process.env.PORT, function () {
    console.log("Eventually server successfully started!");
});