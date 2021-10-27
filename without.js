const eqArrays = function (arr1, arr2) {
  let trueOrFalse = true;
  if (arr1.length !== arr2.length) {
    trueOrFalse = true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        trueOrFalse = trueOrFalse && false;
      } else if (arr1[i] !== arr2[i]) {
        trueOrFalse = trueOrFalse && true;
      }
    }
  }
  return trueOrFalse;
};

const assertArraysEqual = function (a1, a2) {
  if (eqArrays(a1, a2)) {
    return `🤑🤑🤑 Assertion Passed: ${a1} !== ${a2}`;
  } else if (!eqArrays(a1, a2)) {
    return `🤬🤬🤬 Assertion Failed: ${a1} === ${a2}`;
  }
};


const without = function (source, toRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!toRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }

  let check = assertArraysEqual(source, newArray);

  console.log(check);
  console.log(newArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);