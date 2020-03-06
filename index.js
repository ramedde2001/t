const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
respense=""
const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: 'ZFp4Cf6c8dOispn0X5xDyFTJqGtOo0SGfiAgfUkI-DMk',
  }),
  url: 'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/9f3310f7-7e23-44a0-8dd2-26b5d49f673f',
});
const getid=function getidd(calback)
{
assistant.createSession({
  assistantId: '1ca15989-e9b7-49b1-a7d3-390130d0b636'
})
  .then(res => {
	  
    calback( res["result"]["session_id"]);
  })
  .catch(err => {
    console.log(err);
  });
  
}
const sendm=function senmsg( msg ,calback)
{
	getid(function(id)
	{
assistant.message({
  assistantId: '1ca15989-e9b7-49b1-a7d3-390130d0b636',
  sessionId: id,
  input: {
    'message_type': 'text',
    'text': msg
    }
  })
  .then(res => {
  calback(res["result"]["output"]["generic"][0]["text"])
  })
  .catch(err => {
    console.log(err);8
  });
	}
)
}
exports.getid=getid
exports.sendm=sendm
