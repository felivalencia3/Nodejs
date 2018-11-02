const axios = require("axios");

axios.get('https://en.wikipedia.org/wiki/Special:Random')
    .then(function (response) {
        console.log(response.data);
    });