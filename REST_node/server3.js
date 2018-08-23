var express      = require('express')
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const sendme = {
    msg: "Hi, You fetched me. Wow."
}
app.get("/fetchme", (req,res,next) => {
    
    res.send(sendme)
    
})
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});


