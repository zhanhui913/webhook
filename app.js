var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to my linode server!');
});

app.listen(port, function(){
    console.log('NodeJS is running my app on PORT: ' + port);
});

module.exports = app;