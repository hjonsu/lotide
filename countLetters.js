const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let letterCounted = {};
  for (const letter of sentence) {
    if (letterCounted[letter]) {
      letterCounted[letter] += 1;
    } else {
      letterCounted[letter] = 1;
    }
  }
  return letterCounted;
};

console.log(countLetters("LHL"));