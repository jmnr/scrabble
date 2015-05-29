var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
ac.import(function(err, count) {
  console.log("Imported " + count.length + " Scrabble words!");
});
// update
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');
var Twit = require('twit');

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

http.createServer(function handler(request, response) {
  var url = request.url;
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }

  else if (url.indexOf('/twitter/') > -1) {
    var searchTerm = url.split('/')[2].toString();

    var tweetEmbed = '';
    var tweet;
    var tweetID;

    T.get('search/tweets', { q: searchTerm, count: 1}, function(err, data, response) {
      for (var i=0; i<1; i++) {
        tweet = data.statuses[i].text;
        tweetID = data.statuses[i].id_str;
      }
      T.get('statuses/oembed', {id: tweetID, hide_media: true}, function(err, data, response) {
        tweetEmbed += data.html;
      });
    });

    setTimeout(function() {
      response.end(tweetEmbed);
    }, 1000);

  }

  else if (url.indexOf('/words/') > -1) {
    var scrab = url.split('/')[2];
    var ok = ac.numWords(scrab.length, scrab).join(',');
    if(ok.length === 0) {response.end("No results found!");}
    response.end(ok);
  }

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
