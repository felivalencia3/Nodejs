const unirest = require('unirest');
var express = require('express');
const app = express();
/*unirest.get("https://love-calculator.p.mashape.com/getPercentage?fname=Joe&sname=Jenny")
    .header("X-Mashape-Key", "fCUQFHu1W9mshvoi61omFwUeMhutp1yEn9TjsnH7A13sPCKgeI")
    .header("Accept", "application/json")
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });
    */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/*app.get("/calculate", (req, res, next) => {
    let fname = req.query.fname;
    let sname = req.query.sname;
    unirest.get("https://love-calculator.p.mashape.com/getPercentage?fname=" + fname + "&sname=" + sname)
        .header("X-Mashape-Key", "fCUQFHu1W9mshvoi61omFwUeMhutp1yEn9TjsnH7A13sPCKgeI")
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.body);

        });

*/
app.use(express.static('.'));
app.get("/calculate", (req, res, next) => {
let fname = req.query.fname;
let sname =req.query.sname;
unirest.get("https://love-calculator.p.mashape.com/getPercentage?fname=" + fname + "&sname=" + sname)
    .header("X-Mashape-Key", "fCUQFHu1W9mshvoi61omFwUeMhutp1yEn9TjsnH7A13sPCKgeI")
    .header("Accept", "application/json")
    .end(function (result) {
        res.send(result.body);
    })
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});