const express = require('express'),
    app = express(),
    useragent = require('express-useragent');
 
app.use(useragent.express());
app.get('*', function(req, res){
    res.send(req.useragent)
});
const server = app.listen(8081, (err) => {
    if (err) throw err;
    console.log("Your app is running on http://localhost:"+server.address().port)
});