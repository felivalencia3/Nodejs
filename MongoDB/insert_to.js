var MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
var url = "mongodb://localhost:27017/";
const url2 = "https://randomuser.me/api/";



axios.get(url2)
    .then(response => {
        let data = response.data.results[0];let fname = data.name.first;
        let lname = data.name.last;let fullname = fname + " "+ lname;
        let gender = data.gender;let street = data.location.street;
        let city = data.location.city;
        let address = street+", "+city;let email = data.email;let dob = data.dob.date;
        let age = data.dob.age;let picture = data.picture.large;
        let phone = data.phone;

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("blog");



                var myobj = {name:fullname , address:address,age:age,
                    email:email,born:dob,phone:phone, picture:picture  };
                dbo.collection("blogpost").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");

                    db.close();
                });


        });
    })
    .catch(error => {
        console.log(error);
    });

