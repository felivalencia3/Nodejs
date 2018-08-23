var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var month = months[d.getMonth()];

var year =  d.getFullYear();
let day = d.getDate();
let weekday = days[d.getDay()];
let hour = d.getHours();
let minute = d.getMinutes();
let ampm = hour >= 12 ? "PM" : "AM";
let date = weekday +", "+ month +" "+ day +"  "+hour +":"+minute +" "+ampm;

let time = d.getTime();


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blog");
  let bar = Math.ceil(Math.random()*100);
  var myobj = { author: "Felipe Valencia", title: "Welcome to my Blog",  body: "This is the first post that is going to be seen!, wow, thats so cool?",date: date,time:time,foo:bar,country: "Colombia"};

  dbo.collection("blogpost").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
