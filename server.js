const express = require('express')
const server = express();
var port = process.env.PORT || 2000;

server.get('/', function (req, res) {
    console.log("First server");
    res.send("<h1><center> First server </h1></center>")
});

server.listen(port);