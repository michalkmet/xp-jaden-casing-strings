const toJadenCase = require('./jaden-casing-strings');

describe('hello', () => {
  it('should return hello', () => {
    expect(toJadenCase()).toBe('hello');
  });
});
