const assert = require('chai').assert;
const middle = require('../middle');


const test = [1, 2, 3, 4];
const testOdd = [1, 2, 3, 4, 5];

describe("#middle", () => {

  it('test to see if [1, 2, 3, 4] gives 2 and 3 as middle values', () => {
    const expected = [2, 3];
    assert.deepEqual(middle(test), expected);
  });

  it('test to see if [1, 2, 3, 4, 5] gives 3 as the middle value', () => {
    assert.deepEqual(middle(testOdd), [3]);
  });

});