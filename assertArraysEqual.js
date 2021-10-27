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


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 2], [1, 2, 3]);