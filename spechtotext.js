const fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey:'e1gqFQxg8R6A687m-taxCbZaFogrWdgykE767al1B43l',
  }),
  url: 'https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/ca261b60-1641-462c-9ff8-caa15a5e1c54',
});


const totext=function tovoice(calback)
{
	const recognizeParams = {
  audio: fs.createReadStream('test.wav'),
  contentType: 'audio/wav',model:'ar-AR_BroadbandModel'
};
speechToText.recognize(recognizeParams)
  .then(speechRecognitionResults => {
   jsonrep=JSON.stringify(speechRecognitionResults, null, 2);
  calback(speechRecognitionResults["result"]["results"][0]["alternatives"][0]["transcript"])
  })
  .catch(err => {
    console.log('error:', err);
  });
}
const totextv=function tovoicev(buf)
{
	const recognizeParams = {
  audio: buf,
  contentType: 'audio/wav',model:'ar-AR_BroadbandModel',
  
};
speechToText.recognize(recognizeParams)
  .then(speechRecognitionResults => {
   console.log(JSON.stringify(speechRecognitionResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
}

exports.totext=totext
exports.totextv=totextv