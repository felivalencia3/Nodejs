var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    iam_apikey: 'iVDEFv9-nqD3kzC96mnp6k4hM9ximusW29Zi-030FSms'
});

var parameters = {
    text: 'Hello',
    model_id: 'en-es'
};

languageTranslator.translate(
    parameters,
    function(error, response) {
        if (error)
            console.log(error)
        else
            console.log(JSON.stringify(response.translations[0].translation));

    }
);

