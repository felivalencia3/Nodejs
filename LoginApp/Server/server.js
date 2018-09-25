
const express = require("express");
const app = express();
const mysql = require("mysql");
const CryptoJS = require("crypto-js");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "castro03",
    database: "LoginDB"
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* Encryption:
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
    var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
 */
function decrypt(encrypted,userkey) {
    let bytes = CryptoJS.AES.decrypt(encrypted.toString(),userkey.toString());
    return bytes.toString(CryptoJS.enc.Utf8);
}
function encrypt(plaintext, userkey) {
    return CryptoJS.AES.encrypt(plaintext, userkey)
}
app.get("/",(req,res) => {
res.redirect("/login");
res.status(200);
});
app.get("/login", (req,res) => {

});
app.post("/signup",(req,res) => {

});
app.get("/new", (req,res) => {});
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});