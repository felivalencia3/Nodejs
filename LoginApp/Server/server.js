
const MySQL = require("MySQL");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const CryptoJS = require("crypto-js");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "castro03",
    database: "LoginDB"
});
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'redpandamc85@gmail.com',
        pass: 'helpingoTES'
    }
});
app.use(express.static("../public"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
let urlencodedparser = bodyparser.urlencoded({extended: false});
function decrypt(encrypted, userkey) {
    let bytes = CryptoJS.AES.decrypt(encrypted.toString(), userkey.toString());
    return bytes.toString(CryptoJS.enc.Utf8);
}

function encrypt(plaintext, userkey) {
    return CryptoJS.AES.encrypt(plaintext, userkey)
}

app.get("/", (req, res) => {
    res.redirect("/index");
    res.status(200);
});
app.post("/login", urlencodedparser, (req, res) => {
    let username = req.body.user;
    let pass = req.body.pass;
        let query = "SELECT Password FROM User WHERE Username = " + mysql.escape(username);
        con.query(query, function (err, result) {
            if (err) throw err;
            let password = result[0].Password;
            let plainpass = decrypt(password,username);
            let bool;
            if (plainpass === pass) {
                 bool = true
            }else {
                 bool = false
            }
            res.send(bool)
        });

});
app.post("/signup",urlencodedparser, (req, res) => {
    let username = req.body.user;
    let pass = req.body.pass;
    let email = req.body.email;
    const link = ("http://192.168.0.6:8081/new?user="+username+"&&pass="+pass+"&&email="+email).toString();
    const mailOptions = {
        from: 'redpandamc85@gmail.com',
        to: email,
        subject: 'Sign Up Verification Code:',
        html: "<h1>Verify your account here:</h1><br><a style='font-size: 20px;' href="+link+">Verify Here</a>"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send();
        } else {
            console.log('Email sent: ' + info.response);
            res.send(true)
        }
    });

});
app.get("/new", (req, res) => {
    const user = req.query.user;
    const pass = req.query.pass;
    let email = req.query.email;
    email = email.toString();
    let cipherpass = encrypt(pass,user);
    const sql = "INSERT INTO User (Username, Email, Password) VALUES ('"+user+"', '"+email+"','"+cipherpass+"')";
    con.query(sql, (err,result) => {
        if (err) throw err;
        res.status(200).send(true);
    })

});
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});