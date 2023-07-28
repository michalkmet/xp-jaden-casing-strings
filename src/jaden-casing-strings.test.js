const toJadenCase = require('./jaden-casing-strings');

describe('hello', () => {
  it("UAT1.1: Given the jaden case function, When I pass 'a', Then it should return 'A'", () => {
    expect(toJadenCase('a')).toBe('A');
  });
});
