const myModule = require('./spechtotext');
const my = require('./index');
var totext=myModule.totext
var msg=my.sendm
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const wavefile = require('wavefile');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.raw({ type: 'audio/wav', limit: '50mb' }));
app.use(express.static('public'))
app.get('/', function(req, res) { 
res.sendFile('record.html', { root: __dirname })
})
app.post('/voice', function (req, res) {
	
	console.log(req.body)
	let wav = new wavefile.WaveFile(req.body);
	
fs.writeFileSync("test.wav", wav.toBuffer());
totext(function(txt){
	msg("txt",function(ts){res.send(txt+" "+ts)})
	
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))