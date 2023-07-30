const toJadenCase = require('./jaden-casing-strings');

describe('hello', () => {
  it("When I pass 'a', Then it should return 'A'", () => {
    expect(toJadenCase('a')).toBe('A');
  });
  it("When I pass 'Ab', Then it should return 'Ab'", () => {
    expect(toJadenCase('Ab')).toBe('Ab');
  });
  it("When I pass 'hello', Then it should return 'Hello'", () => {
    expect(toJadenCase('hello')).toBe('Hello');
  });
  it("UAT1.4: When I pass 'hey', Then it should return 'Hey'", () => {
    expect(toJadenCase('hey')).toBe('Hey');
  });
});
