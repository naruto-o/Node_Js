var http = require('http');
//creating a  server object;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello,crearted a server object");
    res.end();

}).listen(8080);