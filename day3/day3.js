const { getInput } = require('../getInput');
const { format, splitString } = require('../format');

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
  const ranksacks = format(input, '\n');

  const totalPriority = ranksacks.reduce((total, ranksack) => {
    const [rankSackA, rankSackB] = splitString(ranksack);
    const itemList = { A: {}, B: {} };
    let index = 0;
    let itemFound = null;
    
    while(index < ranksack.length / 2 && !itemFound) {
      itemList.A[rankSackA[index]] = (itemList.A[rankSackA[index]] | 0) + 1;
      itemList.B[rankSackB[index]] = (itemList.B[rankSackB[index]] | 0) + 1;
      
      if (itemList.B[rankSackA[index]] > 0) {
        itemFound = rankSackA[index];
      }
      if (itemList.A[rankSackB[index]] > 0) {
        itemFound = rankSackB[index];
      }
      
      index++;
    }
    return total += getLetterPriority(itemFound);
  }, 0);
  
  console.log('RESULT', totalPriority);
}

main();