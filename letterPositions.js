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

const assertArraysEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${a1} === ${a2}`);
  } else if (!eqArrays(a1, a2)) {
    console.log(`🤬🤬🤬 Assertion Failed: ${a1} !== ${a2}`);
  }
};


const letterPositions = function (sentence) {
  const results = {};
  sentence = sentence.replaceAll(' ', '');
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else if (sentence[i]) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello e"));

assertArraysEqual(letterPositions("hello e").e, [1, 5]);