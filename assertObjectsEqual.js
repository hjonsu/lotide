const eqArrays = function (arr1, arr2) {
  let trueOrFalse = true;
  if (arr1.length !== arr2.length) {
    trueOrFalse = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        trueOrFalse = trueOrFalse && true;
      } else if (arr1[i] !== arr2[i]) {
        trueOrFalse = trueOrFalse && false;
      }
    }
  }
  return trueOrFalse;
};

const eqObjects = function (object1, object2) {
  let bool = true;
  let object1A = Object.keys(object1);
  let object2A = Object.keys(object2);
  if (object1A.length !== object2A.length) {
    bool = bool && false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        bool = bool && eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) {
        bool = bool && true;
      } else {
        bool = bool && false;
      }
    }
  }
  return bool;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (!eqObjects(object1, object2)) {
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({ a: 'hello', b: 'world', c: 'goodbye' }, { a: 'hello', b: 'world' });

assertObjectsEqual({ a: 'hello', b: 'world', c: 'goodbye' }, { a: 'hello', b: 'world', c: 'goodbye' });
