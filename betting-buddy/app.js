var express = require("express");
var app = express();

var port = process.env.PORT;    //global variable from Cloud 9

// define static routes where Express should look for files first
app.use(express.static('public'));


// API Routes 

app.get('/', function(req, res, next){
    res.send('Welcome to Super Bowl Betting Buddy');
});

app.listen(port,function(err){
    console.log('Server is running on port: ' + port);
});
