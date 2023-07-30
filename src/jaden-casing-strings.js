function toJadenCase(inputStr) {
  return inputStr
    .split(' ')
    .map((word) => {
      let result = [...word]
        .map((char, i) => {
          if (i === 0) {
            return char.toUpperCase();
          }
          return char;
        })
        .join('');
      return result;
    })
    .join(' ');
}

module.exports = toJadenCase;
