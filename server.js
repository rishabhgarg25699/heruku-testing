const express = require('express')
const server = express();
server.get('/', function (req, res) {
    console.log("<h1><center> First server </h1></center>");

    res.send("<h1><center> First server </h1></center>")
});

server.listen(2000);