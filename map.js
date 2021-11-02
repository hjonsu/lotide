const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length);
console.log(results2);
// tests for how long each word is

const results3 = map(words, word => word.length <= 4);
console.log(results3);
// tests for which words are 4 letters or less


assertArraysEqual(words, results1);
assertArraysEqual(words, results2);
assertArraysEqual(words, results3);