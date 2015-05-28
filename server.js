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
    console.log(searchTerm);

    T.get('search/tweets', { q: searchTerm, count: 1}, function(err, data, response) {
      global.tweet = data.statuses[0].text;
      global.tweetID = data.statuses[0].id_str;
      console.log(tweetID);
    });

    setTimeout(function() {
      T.get('statuses/oembed', {id: global.tweetID}, function(err, data, response) {
      console.log(data);
      global.tweetEmbed = data.html;
    });
    response.end(global.tweetEmbed);
    }, 2000);

  }

  // hide_media: true, align: center, maxwidth: 250

  if (url.length > 1) {
    var scrab = url.split('/')[1];
    var ok = ac.numWords(scrab.length, scrab).join(',');
    if(ok.length === 0) {response.end("No results found!");}
    response.end(ok);
  } else {
    response.end('blank');
  }

  }).listen(port);

console.log('node http server listening on http://localhost:' + port);
