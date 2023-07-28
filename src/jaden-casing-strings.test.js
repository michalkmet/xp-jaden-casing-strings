const toJadenCase = require('./jaden-casing-strings');

describe('hello', () => {
  it("UAT1.1: Given the jaden case function, When I pass 'a', Then it should return 'A'", () => {
    expect(toJadenCase('a')).toBe('A');
  });
  it("UAT1.2: Given the jaden case function, When I pass 'Ab', Then it should return 'Ab'", () => {
    expect(toJadenCase('Ab')).toBe('Ab');
  });
});
