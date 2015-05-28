var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
ac.import(function(err, count) {
  console.log("Imported " + count.length + " Scrabble words!");
});
// ok1
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response) {
  var url = request.url;
  console.log("request.url:", url);
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }
  if (url.length > 1) { //if find is in the url
    var scrab = url.split('/')[1];
    var ok = ac.numWords(scrab.length, scrab).join(',');
    response.end(ok);
  } else {
    response.end('hello Dan!');
  }
}).listen(port);

console.log('node http server listening on http://localhost:' + port);

//http from nelson
// http.createServer(function handler(request, response) {
//   //console.log(request);
//   var url = request.url;
//   console.log("request.url:", url);
//   if (url.length === 1) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.end(index.toString());
//   }
//   if (url.indexOf('/find/') > -1) { //if find is in the url
//     // localhost:3000/find/word
//     var word = url.split('/')[2];
//     console.log(word);
//     ac.findWord(word, function (err, found){
//       // console.log(found);
//       response.end(found.join(','));
//     });
//     // response.end('word: ', word);
//   }
//   else {
//     response.end('hello Dan!');
//   }
// }).listen(port);
