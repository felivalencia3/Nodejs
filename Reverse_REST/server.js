const express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/reverse", function(req,res) {
    let str = req.query.str;
    let reversed = str.split("").reverse().join("");
    response = {
        string: reversed
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});

