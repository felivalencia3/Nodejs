var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "castro03",
    database: "DataServer"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Friends WHERE FirstName = 'Lorenzo'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
})
