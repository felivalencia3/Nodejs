const express = require("express");
const unirest = require("unirest");
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/lyric", (req,res,next) => {
    let artist = req.query.artist;
    let song =  req.query.song;
    unirest.get("https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist="+artist.toLowerCase()+"&q_track="+song.toLowerCase())
        .header("X-Mashape-Key", "fCUQFHu1W9mshvoi61omFwUeMhutp1yEn9TjsnH7A13sPCKgeI")
        .header("Accept", "application/json")
        .end(function (result) {
            res.send(result.body)
            console.log(result)
        });

});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});