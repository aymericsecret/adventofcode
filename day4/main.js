const { getInput } = require('../getInput');
const { format } = require('../format');

const INPUT_NAME = 'input.txt';

const main = async () => {
  const input = await getInput(INPUT_NAME);
  const formattedInput = format(input, '\n');
  
  let totalNumber = 0;
  formattedInput.forEach(row => {
    const subRows = format(row, ',');
    const formattedSubRows = subRows.map(row => format(row, '-'));

    const firstValue = +formattedSubRows[0][0];
    const firstLastValue = +formattedSubRows[0][formattedSubRows[0].length - 1];

    const secondValue = +formattedSubRows[1][0];
    const secondLastValue = +formattedSubRows[1][formattedSubRows[1].length - 1];
    
    if ((firstValue <= secondValue && firstLastValue >= secondLastValue)
    || (firstValue >= secondValue && firstLastValue <= secondLastValue)) {
      totalNumber++;
      console.log({ firstValue, firstLastValue, secondValue, secondLastValue})
    } else if ((firstValue <= secondValue && firstLastValue >= secondValue)
    || (firstValue <= secondLastValue && firstLastValue >= secondLastValue)) {
      totalNumber++;
      console.log({ firstValue, firstLastValue, secondValue, secondLastValue})
    }
  })

  console.log(totalNumber);
}

main();