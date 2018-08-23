var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient();
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("rest_db");
    var mysort = { name: -1 };  // {1} is ascending
                                // {-1} is descending
    
    dbo.collection("people").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
