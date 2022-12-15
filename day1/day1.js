const { getInput } = require('../getInput');
const { format } = require('../format');

const INPUT_NAME = 'day1.txt';

const main = async () => {
  const input = await getInput(INPUT_NAME);
  const formattedInput = format(input, '\n\n');
  const cleanInput = formattedInput
    .map(arr => 
      format(arr, '\n').reduce((total, elem) => +elem + total, 0)
    ).sort((a,b) => b-a);

  let topThree = 0;
  for(let i = 0; i <= 2; i++) {
    topThree += cleanInput[i]; 
  }

  console.log('RESULT', {
    first: cleanInput[0],
    topThree,
  });
}

main();
