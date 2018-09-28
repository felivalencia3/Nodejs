var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/form.html', function (req, res) {
    res.sendFile( __dirname + "/" + "form.html" );
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/get', function (req, res) {
    // Prepare output in JSON format
    console.log(req.headers)
    let first = req.query.user;
    let last = req.query.pass;
    let reversefirst = first.split("").reverse().join("");
    let reverselast = last.split("").reverse().join("");
    response = {
      first: reversefirst,
        last: reverselast
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})