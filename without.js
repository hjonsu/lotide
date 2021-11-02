const assertArraysEqual = require('./assertArraysEqual');


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