const assertArraysEqual = require('./assertArraysEqual');



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

module.exports = middle;