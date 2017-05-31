var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Zhan\n');
}).listen(8080, '45.33.42.219');
console.log('Server running at http://45.33.42.219:8080/');