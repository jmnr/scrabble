var assert = require('assert');
// var expected = true;
// var actual = false;
// assert.equal(expected, actual);
var ac = require('../index.js');

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.import imports a list of words into memory");
ac.import(function (err, words) {
  console.log("words.txt had " + words.length + " words");
  assert.equal(words.length, 178691);
});

console.log("# attempt to invoke ac.import without callback");
var error = ac.import('string');
assert.equal(error.message, "callback argument MUST be a function");

console.log("# ac.numWords returns the correct word");
ac.import(function() {
  var scrab = 'abul__';
  var result = ac.numWords(scrab.length, scrab).join(',');
  assert.equal(result, "abulia,abulic");
});

// console.log("# ac.stats keeps a timestamp from when searched");
// ac.import(function() {
//   ac.stats('Abe', function (err, found) {
//   });
// });

// console.log("# ac.findWord attempts to find a string in words array");
// ac.import(function() {
//   ac.findWord('Ac', function (err, found) {
//     assert.equal(err, null);
//     assert.equal(found.length, 33);
//   });
// });

console.log("# ac.match parses array correctly");
var scrab = 'd__';
var arr = ['hat', 'dog', 'cat'];
assert.equal(ac.match(arr, scrab), 'dog');

console.log("# ac.indexes finds match to word");
var scrab = 'd__';
var arr = ['hat', 'dog', 'cat'];
assert.equal(ac.indexes(arr, 'd', 0), 'dog');
