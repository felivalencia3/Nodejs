const express = require("express");
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': 'f6ce703f-060e-4743-8d79-42e40b3d4eb0',
    'password': 'xa8CPlINiyuy',
    'version': '2018-03-16'
});
var app = express();
app.use(express.static("."));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/understand", (req, res,next) => {

var parameters = {
    "text": req.query.text,
    'features': {
        "concepts" : {"limit": 10},
        "categories" : {},

    }
};

    natural_language_understanding.analyze(parameters, function(err, response) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.send(JSON.stringify(response.categories.map(label => label.label)));
        }
    });
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});


/*
var parameters = {
  'text': 'IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.',
  'features': {
      "concepts" : {"limit": 10},
      "categories" : {},

  }
};


*/