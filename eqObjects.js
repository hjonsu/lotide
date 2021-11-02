const eqArrays = require('./eqArrays');


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

module.exports = eqObjects;