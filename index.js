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

// ac.stats = function (word, callback) {
//   if (!ac.searches) {
//     ac.searches = {};
//   }
//   if (!ac.searches[word]) {
//     ac.searches[word] = [];
//   }
//   ac.searches[word].push(new Date().getTime());
//   callback(null, ac.searches);
// };

// ac.findWord = function (word, callback) {
//   // who wants to volunteer to implement the method?
//   var found = [];
//   for (var i = 0; i < ac.words.length; i++) {
//     if (ac.words[i].search(word) === 0) {
//       found.push(ac.words[i]);
//     }
//   }
//   console.log('found.length', found.length);
//   return callback(null, found);
// };

ac.numWords = function (num, scrab) { //will be hardcoded as 6 for time being
  // console.log('indexes', ac.words[7]);
  var words = ac.words.filter(function(x) {
    return x.length === num;
  });
  return ac.match(words, scrab);
};

//filters the total word list for words of the correct length


ac.match = function (words, scrab) { //takes words matching letter amount and matches individual letters
  for(var i = 0; i < scrab.length; i++) {
    if(scrab[i] !== "_") {
      words = ac.indexes(words, scrab[i], i);
    }
  }//if theres a value in text box, pare down words using that letter
  return words;
};

//taking each element of the string entered by the user
//and narrow down the list of words which have the matching letter at that index


ac.indexes = function(arr, letter, index) {
  // console.log('ac indexes', arr, letter, index);
  return arr.filter(function(x) {
    return x[index] === letter;
  });
};


//filter the word list to find the words that match at each index
module.exports = ac;
