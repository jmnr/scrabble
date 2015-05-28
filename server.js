var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');
// var twitter = require('twitter');
// var twitter = require('twitter-node-client').Twitter;
var Twit = require('twit');
// var error = function (err, response, body) {
//       console.log('ERROR [%s]', err);
//   };
// var success = function (data) {
//       console.log('Data [%s]', data);
//   };

// var client = new twitter({
//   consumer_key: 'Kn4MIcuzclV9QhWCsetpz18zO',
//   consumer_secret: 'XU8c0aVdGmWj5ZwLGSgRCjpUujsfBrPGpaAOTFmp8L5g0H7CZl',
//   access_token_key: '2149662469-r0STzXowAMF2SDj4MHKobCSDmw7b43sMN6OUoQX',
//   access_token_secret: 'Vzpc9AxaYzW7olD8CSP48CL1LWZEL2GTCH6wxJGpCWTzJ',
// });

// var T = new twit({
//      "consumerKey": 'Kn4MIcuzclV9QhWCsetpz18zO',
//      "consumerSecret": 'XU8c0aVdGmWj5ZwLGSgRCjpUujsfBrPGpaAOTFmp8L5g0H7CZl',
//      "accessToken": '2149662469-r0STzXowAMF2SDj4MHKobCSDmw7b43sMN6OUoQX',
//      "accessTokenSecret": 'Vzpc9AxaYzW7olD8CSP48CL1LWZEL2GTCH6wxJGpCWTzJ'
//  });


var T = new Twit({
    consumer_key:         'Kn4MIcuzclV9QhWCsetpz18zO',
    consumer_secret:      'XU8c0aVdGmWj5ZwLGSgRCjpUujsfBrPGpaAOTFmp8L5g0H7CZl',
    access_token:         '2149662469-r0STzXowAMF2SDj4MHKobCSDmw7b43sMN6OUoQX',
    access_token_secret:  'Vzpc9AxaYzW7olD8CSP48CL1LWZEL2GTCH6wxJGpCWTzJ'
});


http.createServer(function handler(request, response) {
  var url = request.url;
  // console.log("request.url:", url);
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }

  if (url.indexOf('/twitter/') > -1) {
    // locahost:3000/find/word
    var searchTerm = url.split('/')[2].toString();
    console.log(searchTerm);

    // client.getSearch({'q':searchTerm}, error, success);
    T.get('search/tweets', { q: searchTerm, count: 1}, function(err, data, response) {
      // console.log(data.statuses[0]);
      global.tweet = data.statuses[0].text;
      global.tweetID = data.statuses[0].id_str;
      console.log(global.tweetID);
    });
    // client.get('search/tweets.json', {q: searchTerm}, function(error, tweets, response){
    //     if(error) throw error;
    //     // global.tweet = tweets.statuses[0].text;
    //     global.tweet = tweets.statuses[0];
    //     global.tweetID = tweets.statuses[0].id_str;
    //     // global.tweetURL = tweets.statuses[0].url;
    //     console.log(global.tweetID);
    //     console.log(global.tweet);
    //     // console.log(global.tweetURL);
    // });

    // client.get('statuses/oembed.json', {id: global.tweetID}, function(error, tweets, response){
    //     if(error) throw error;
    //     console.log(response);
    //     global.tweetHTML = response.html;
    //     console.log(global.tweetHTML);
    // });

    T.get('statuses/oembed', { id: global.tweetID}, function(err, data, response) {
      // console.log(data.statuses[0]);
      console.log(data);
    });

    response.end(global.tweet);
  }
  // else {
  //   response.end('hello world!');
  // }

  // ?hide_media=true&align=center

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
