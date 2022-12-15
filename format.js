const format = (input, seperator = '\n') => {
  return input.split(seperator);
}
const splitString = (input) => {
  if (input.length % 2 > 0) {
    throw new Error('Not par input !');
  }
  return [
    input.slice(0, input.length / 2),
    input.slice(input.length / 2, input.length)
  ];
}

module.exports = {
  format,
  splitString,
}