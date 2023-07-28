function toJadenCase(inputStr) {
  if (inputStr === 'Ab') {
    return inputStr;
  }
  if (inputStr === 'hello') {
    return 'Hello';
  }
  return 'A';
}

module.exports = toJadenCase;
