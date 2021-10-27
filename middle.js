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



const middle = function (array) {
  let newMiddle = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    newMiddle.push(array[(array.length / 2) - 1]);
    newMiddle.push(array[array.length / 2]);
    return newMiddle;
  } else {
    newMiddle.push(array[Math.floor((array.length - 1) / 2)]);
    return newMiddle;
  }
};

// 1. For arrays with one or two elements, return an empty array
// 2. For odd # of elements, return array containing single middle element
// 3. For even # of elements, return array containg middle two elements


console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const test = [1, 2, 3, 4];
const testOdd = [1, 2, 3, 4, 5];

assertArraysEqual(middle(test), test);
assertArraysEqual(middle(testOdd), testOdd);