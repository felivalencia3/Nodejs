var express = require('express')
var app = express();
const unirest = require("unirest")
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req,res) => {
unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?count=1")
.header("X-Mashape-Key", "VpMzHMZ1EXmshUE9D9Z1yz06AoC5p1xYgPfjsnS4lRQl5q9DJc")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.body);
  res.send(result.body[0]);
});
} )
app.get("/movies", (req,res) => {
unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1")
.header("X-Mashape-Key", "VpMzHMZ1EXmshUE9D9Z1yz06AoC5p1xYgPfjsnS4lRQl5q9DJc")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.body);
  res.send(result.body[0]);
});
})
app.get("/famous", (req,res) => {
unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1")
.header("X-Mashape-Key", "VpMzHMZ1EXmshUE9D9Z1yz06AoC5p1xYgPfjsnS4lRQl5q9DJc")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.body);
  res.send(result.body[0]);
});
})
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});


