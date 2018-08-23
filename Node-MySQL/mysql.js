const mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "castro03",
    database: "DataServer"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE customers SET name = 'Chino' WHERE name = 'Peter'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});