var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;
var ip = '45.33.42.219';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to my linode server!');
});

app.listen(port, ip, function(){
	var host = server.address().address;
  	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;