var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
ac.import(function(err, count) {
  console.log("Imported " + count.length + " Scrabble words!");
});
// update
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response) {
  var url = request.url;
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }
  if (url.length > 1) {
    var scrab = url.split('/')[1];
    var ok = ac.numWords(scrab.length, scrab).join(',');
    if(ok.length === 0) {response.end("No results found!")}
    response.end(ok);
  } else {
    response.end('blank');
  }
}).listen(port);

console.log('node http server listening on http://localhost:' + port);
