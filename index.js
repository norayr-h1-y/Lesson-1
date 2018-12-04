var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});
app.get("/name/:search", function(req, res){
    var x = req.params.search;
    res.redirect('https://www.google.com/search?q=' + x);
 });
 app.get("/google", function(req, res){
    res.redirect('https://www.google.com/');
 });
 app.get("/*", function(req, res){
    res.send("404 not found");
 });
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
