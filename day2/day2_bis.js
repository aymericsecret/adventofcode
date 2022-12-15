const { getInput } = require('../getInput');
const { format, format } = require('../format');

const INPUT_NAME = 'day2.txt';

const playPointsConfig = new Map([
  ['X', 1], 
  ['Y', 2], 
  ['Z', 3]
]);
const moveConfig = new Map([
  ['A', { win: 'Z', lose: 'Y', draw: 'X' }], 
  ['B', { win: 'X', lose: 'Z', draw: 'Y' }], 
  ['C', { win: 'Y', lose: 'X', draw: 'Z' }]
]);
const winConfig = new Map([
  ['X', 'LOST'], 
  ['Y', 'DRAW'], 
  ['Z', 'WIN']
]);
const winPointsConfig = new Map([
  ['WIN', 6],
  ['DRAW', 3],
  ['LOST', 0],
]);


const main = async () => {
  const input = await getInput(INPUT_NAME);
  const formattedInput = format(input, '\n');
  let totalPoints = 0;

  formattedInput.forEach(round => {
    const actions = format(round, ' ');
    const opponent = actions[0];
    const me = actions[1];

    const winResult = winConfig.get(me);
    totalPoints += winPointsConfig.get(winResult);

    switch (winResult) {
      case 'WIN':
        totalPoints += playPointsConfig.get(moveConfig.get(opponent).lose);
        break;
      case 'DRAW':
        totalPoints += playPointsConfig.get(moveConfig.get(opponent).draw);
        break;
        case 'LOST':
        totalPoints += playPointsConfig.get(moveConfig.get(opponent).win);
        break;
    }
  });

  console.log('RESULT', totalPoints);
}

main();