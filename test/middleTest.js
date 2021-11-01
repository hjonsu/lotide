const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


const test = [1, 2, 3, 4];
const testOdd = [1, 2, 3, 4, 5];

assertArraysEqual(middle(test), test);
assertArraysEqual(middle(testOdd), testOdd);