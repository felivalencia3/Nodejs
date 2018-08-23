var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var CombinedStream = require('combined-stream');

var speechToText = new SpeechToTextV1({
    username: '394bc2d2-4c16-4271-8aa7-65d145eeba31',
    password: 'JWXaygL8Gg4i'
});

var combinedStream = CombinedStream.create();
combinedStream.append(fs.createReadStream('audio-file1.flac'));
combinedStream.append(fs.createReadStream('audio-file2.flac'));

var recognizeParams = {
    audio: fs.createReadStream("audio-file1.flac"),
    'content_type': 'audio/flac',
    timestamps: false,
    'word_alternatives_threshold': 0.9,
    keywords: ['colorado', 'tornado', 'tornadoes'],
    'keywords_threshold': 0.5
};

speechToText.recognize(recognizeParams, function(error, speechRecognitionResults) {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(speechRecognitionResults, null, 2));
    }
});