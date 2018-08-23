var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': 'f6ce703f-060e-4743-8d79-42e40b3d4eb0',
    'password': 'xa8CPlINiyuy',
    'version': '2018-03-16'
});
var parameters = {
    "text": "When exchanging data between a browser and a server, the data can only be text.\n" +
    "\n" +
    "JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.\n" +
    "\n" +
    "We can also convert any JSON received from the server into JavaScript objects.\n" +
    "\n" +
    "This way we can work with the data as JavaScript objects, with no complicated parsing and translations.",
    'features': {
        "categories" : {},

    }
};

natural_language_understanding.analyze(parameters, function(err, response) {
    if (err) {
        console.log(err);
    }
    else {

        //console.log(JSON.stringify(response,null,3));
        let categories = response.categories.map(label => label.label);
        console.log(JSON.stringify(response.categories.map(label => label.label),null,1))


    }
});