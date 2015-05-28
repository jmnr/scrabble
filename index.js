var fs = require('fs');
var ac = {};

ac.import = function (callback) {
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function');
  }
  var filename = __dirname + '/words.txt';
  fs.readFile(filename, 'utf8', function (err, data) {
    ac.words = data.split('\n');
    return callback(err, ac.words);
  });
};

ac.stats = function (word, callback) {
  if (!ac.searches) {
    ac.searches = {};
  }
  if (!ac.searches[word]) {
    ac.searches[word] = [];
  }
  ac.searches[word].push(new Date().getTime());
  callback(null, ac.searches);
};

ac.findWord = function (word, callback) {
  // who wants to volunteer to implement the method?
  var found = [];
  for (var i = 0; i < ac.words.length; i++) {
    if (ac.words[i].search(word) === 0) {
      found.push(ac.words[i]);
    }
  }
  return callback(null, found);
};

// client.get('search/tweets.json', {q: 'orangutan'}, function(error, tweets, response){
//     if(error) throw error;
//     console.log(tweets.statuses[0].text);
//   //  console.log(response);
// });

// client.get('statuses/oembed.json?hide_media=true&align=center&id=2535323587&url=http%3A%2F%2Ft.co%2F9CIt1rks5K', function(error,response){
//     if(error) throw error;
//     console.log(response);
//     //document.getElementById('tweets').html = response;
// });


module.exports = ac;
