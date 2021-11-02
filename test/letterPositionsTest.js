const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');


// console.log(letterPositions("lighthouse in the house"));
// console.log(letterPositions("hello e"));

assertArraysEqual(letterPositions("hello e").e, [1, 5]);