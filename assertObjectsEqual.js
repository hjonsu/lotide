const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (!eqObjects(object1, object2)) {
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};
module.exports = assertObjectsEqual;