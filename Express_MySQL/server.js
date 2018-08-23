const express = require("express");
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "castro03",
    database: "restdb"
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/select", (req, res, next) => {
        let id = req.query.id;
            con.query("SELECT * FROM customers WHERE id = " + id, function (err, result) {
                if (err) throw err;
                console.log(result[0]);
                res.send(result[0]);

            });


    });

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});
