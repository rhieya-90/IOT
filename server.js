var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/routes/customer.routes.js')(app);
 
 app.get('/riya',(req,res)=>{
 	res.send('welcome to iot platform');
 })
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})
