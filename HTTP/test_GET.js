const axios = require("axios");
var fs = require('fs');
axios.get('http://www.google.com')
    .then(function (response) {
        console.log(response.data);
        fs.appendFile("google.html", response.data, (err) => {
            if (err) throw err;
            console.log("Saved!")
        })
    });