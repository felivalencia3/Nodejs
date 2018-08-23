const express = require("express");
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    iam_apikey: 'iVDEFv9-nqD3kzC96mnp6k4hM9ximusW29Zi-030FSms'
});
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/translate", (req, res,next) => {
    var parameters = {
        text: req.query.str,
        model_id: 'en-es'
    };
    languageTranslator.translate(
        parameters,
        function(error, response) {
            if (error)
                console.log(error)
            else
                console.log(JSON.stringify(response.translations[0].translation));
            res.send(JSON.stringify(response.translations[0].translation))

        }
    );

})
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});