var assert = require('assert');
// var expected = true;
// var actual = false;
// assert.equal(expected, actual);
var ac = require('../index.js');

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.words imports a list of words into memory");
ac.import(function (err, words) {
  console.log("words.txt had " + words.length + " words");
  assert.equal(words.length, 99157);
});

console.log("# attempt to invoke ac.import without callback");
var error = ac.import('string');
assert.equal(error.message, "callback must be a function");

// console.log("# ac.findWord finds a string in a words array");
// ac.import(function() {
//   console.log('one');
//   ac.findWord('Abe', function (err, found) {
//     assert.equal(err, null);
//     assert.equal(found.length, 3);
//   });
// });
//
// console.log("# ac.stats keeps a timestamp from when searched");
// ac.import(function() {
//   ac.stats('Abe', function (err, found) {
//   });
// });

console.log("# ac.findWords attempts to find a string in words array");
ac.import(function() {
  ac.findWord('Ac', function (err, found) {
    assert.equal(err, null);
    assert.equal(found.length, 33);
  });
});

console.log("# ac.stats tracks which words/strings have been searched for");
ac.import(function() {
  ac.stats('rubies', function (err, stats) {
    console.log(stats);
    assert.equal(stats['rubies'].length, 1);
    ac.stats('rubies', function (err, stats) {
      console.log(stats);
      assert.equal(stats['rubies'].length, 2);
    });
  });
});
