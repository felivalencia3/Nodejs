var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');


var speechToText = new SpeechToTextV1({
    username: '394bc2d2-4c16-4271-8aa7-65d145eeba31',
    password: 'JWXaygL8Gg4i'
});


var recognizeParams = {
    audio: fs.createReadStream("p.mp3"),
    'content_type': 'audio/mp3',
};

speechToText.recognize(recognizeParams, function(error, speechRecognitionResults) {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(speechRecognitionResults.results[0],null,2));
    }
});