const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let bool = true;
  let object1A = Object.keys(object1);
  let object2A = Object.keys(object2);

  // step 1: check if the keys are the same
  if (object1A.length !== object2A.length) {
    bool = bool && false;
  } else {
    // step 2: check if the VALUES at each key are the same
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false