const { getInput } = require('../getInput');
const { formatByReturn } = require('../format');

const INPUT_NAME = 'input.txt';

const main = async () => {
  const input = await getInput(INPUT_NAME);
  const formattedInput = formatByReturn(input);
  console.log(formattedInput);
}

main();