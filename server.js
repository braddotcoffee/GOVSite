var express = require('express');
var path    = require("path");
var app     = express();
var port    = process.env.PORT || 3000;

// Set header for all responses //
app.use(function(req, res, next){
  res.set({"X-Content-Type-Options":"nosniff"});
  return next();
})

app.use(express.static(path.join(__dirname, "static")));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "fact-sheet.html"));
})

app.listen(port, function(){
  console.log("App is listening on port " + port);
})
