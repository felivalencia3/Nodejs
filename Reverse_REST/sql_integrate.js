var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'castro03',
    database : 'restdb'
});

connection.connect();

connection.query('SELECT * FROM Customers WHERE age = 12', function (err, rows, fields) {
    if (err) throw err

    console.log('The only underage customer is: ', rows[0].name)
})

connection.end();