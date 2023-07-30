const toJadenCase = require('./jaden-casing-strings');

describe('User Story 1: Simple one word string to Jaden case', () => {
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

describe('User Story 2: Two words string to Jaden case', () => {
  it("UAT2.1: When I pass 'a a', Then it should return 'A A'", () => {
    expect(toJadenCase('a a')).toBe('A A');
  });
  it("UAT2.2: When I pass 'aa bb', Then it should return 'Aa Bb'", () => {
    expect(toJadenCase('aa bb')).toBe('Aa Bb');
  });
});
