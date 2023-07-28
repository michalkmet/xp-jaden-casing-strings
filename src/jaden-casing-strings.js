function toJadenCase(inputStr) {
  return [...inputStr]
    .map((char, index) => {
      if (index === 0) {
        char = char.toUpperCase();
      }
      return char;
    })
    .join('');
}

module.exports = toJadenCase;
