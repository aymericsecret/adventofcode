const { getInput } = require('../getInput');
const { formatByReturn, formatBySpace } = require('../format');

const INPUT_NAME = 'day2.txt';

const playPointsConfig = new Map([
  ['X', 1], 
  ['Y', 2], 
  ['Z', 3]
]);
const moveConfig = new Map([
  ['X', 'A'], 
  ['Y', 'B'], 
  ['Z', 'C']
]);
const winConfig = new Map([
  ['X', 'C'], 
  ['Y', 'A'], 
  ['Z', 'B']
]);
const winPointsConfig = new Map([
  ['WIN', 6],
  ['DRAW', 3],
  ['LOST', 0],
])


const main = async () => {
  const input = await getInput(INPUT_NAME);
  const formattedInput = formatByReturn(input);
  let totalPoints = 0;

  formattedInput.forEach(round => {
    const actions = formatBySpace(round);
    const opponent = actions[0];
    const me = actions[1];

    totalPoints += playPointsConfig.get(me);
    if (moveConfig.get(me) === opponent) {
      totalPoints += winPointsConfig.get('DRAW');
    } else if (winConfig.get(me) === opponent) {
      totalPoints += winPointsConfig.get('WIN');
    } else {
      totalPoints += winPointsConfig.get('LOST');
    }
  });

  console.log('RESULT', totalPoints);
}

main();