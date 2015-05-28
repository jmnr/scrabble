var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
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
    });

    setTimeout(function() {
      T.get('statuses/oembed', { id: global.tweetID}, function(err, data, response) {
      global.tweetEmbed = data.html;
    });
    response.end(global.tweetEmbed);
  }, 1000);

  }

  // ?hide_media=true&align=center

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
