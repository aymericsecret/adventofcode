const fs = require('fs');

const getInput = async (fileName) => {
  return fs.readFileSync(fileName, 'utf8');
}

module.exports = { getInput };