const assertObjectsEqual = require('../assertObjectsEqual');
assertObjectsEqual({
  a: 'hello',
  b: 'world',
  c: 'goodbye'
}, {
  a: 'hello',
  b: 'world'
});

assertObjectsEqual({
  a: 'hello',
  b: 'world',
  c: 'goodbye'
}, {
  a: 'hello',
  b: 'world',
  c: 'goodbye'
});