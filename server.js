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
    consumer_key:         'Kn4MIcuzclV9QhWCsetpz18zO',
    consumer_secret:      'XU8c0aVdGmWj5ZwLGSgRCjpUujsfBrPGpaAOTFmp8L5g0H7CZl',
    access_token:         '2149662469-r0STzXowAMF2SDj4MHKobCSDmw7b43sMN6OUoQX',
    access_token_secret:  'Vzpc9AxaYzW7olD8CSP48CL1LWZEL2GTCH6wxJGpCWTzJ'
});

http.createServer(function handler(request, response) {
  var url = request.url;
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }

  if (url.indexOf('/twitter/') > -1) {
    var searchTerm = url.split('/')[2].toString();
    var tweetEmbed = '';
    var tweetID;
    T.get('search/tweets', { q: searchTerm, count: 1}, function(err, data, resp) {
      // var j = 0;

      // for (var i=0; i<3; i++) {
        tweetID = data.statuses[0].id_str;
        T.get('statuses/oembed', {id: tweetID, hide_media: true}, function(err, data, res) {
          tweetEmbed = data.html;
        });
      // }
      console.log("TWITTER", tweetEmbed);
    });

    response.end(tweetEmbed);
  }

  if (url.indexOf('/words/') > -1) {
    var scrab = url.split('/')[2];
    var ok = ac.numWords(scrab.length, scrab).join(',');
    if(ok.length === 0) {response.end("No results found!");}
    response.end(ok);
  } else {
    response.end('blank');
  }

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
