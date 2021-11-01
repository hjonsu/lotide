const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("return 2 for length of array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it('return "Lighthouse" to find the first element of ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it('return "Labs" to find the second element of ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
});