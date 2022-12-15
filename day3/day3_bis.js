const { getInput } = require('../getInput');
const { format } = require('../format');

const INPUT_NAME = 'day3.txt';

const getLetterPriority = (letter) => {
  const letterValue = letter.charCodeAt(0);
  if (letterValue >= 97) {
    // lowerCase
    return letterValue - 96; // From 1 to 26
  }
  // upperCase
  return letterValue - 64 + 26; // From 27 to 52
}

const main = async () => {
  const input = await getInput(INPUT_NAME);
  const rucksacks = format(input, '\n');

  let group = 1;
  let tmpItemList = {};
  const foundItemList = [];
  let itemPrio = 0;

  rucksacks.forEach((rucksack, rucksackIndex) => {

    rucksack.split('').forEach(item => {
      if (group === 1) {
        tmpItemList[item] = 1;
      } else if (group === 2 && tmpItemList[item] === 1) {
        tmpItemList[item] = 2;
      } else if (group === 3 && tmpItemList[item] === 2) {
        tmpItemList[item] = 3;
        foundItemList.push([item, getLetterPriority(item)]);
        itemPrio += getLetterPriority(item);
        console.log('item trouvée', rucksackIndex, item);
      }

    });

    group = group === 3 ? 1 : group + 1;
    if (group === 1) {
      tmpItemList = {};
    }
  });
  
  console.log('RESULT', foundItemList, itemPrio);
}

main();