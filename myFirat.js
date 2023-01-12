var http = require('http');
var dt = require('./MyFirstModule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the date and time currently is :"+dt.myDateTime());
  res.end('yes it isworkingg!');
}).listen(8080);