const { getInput } = require('../getInput');
const { format } = require('../format');

const INPUT_NAME = 'input.txt';
const PROCEDURE_NAME = 'procedure.txt';
const inputInterval = 4;

const formatStacks = (stackTotal, formattedInput) => {
  const stacks = [];
  formattedInput.forEach(row => {
    for (let i = 0; i < inputInterval * stackTotal; i = i + 4) {
      const stackNbr = i / 4;
      if (row[i + 1] !== ' ') {
        if (stacks[stackNbr]) {
          stacks[stackNbr].unshift(row[i + 1])
        } else {
         stacks[stackNbr] = [row[i + 1]];
        }
      }
    }
  })
  // console.log(stacks);
  return stacks;
}

const formatProcString = (proc) => {
  const procs = proc.split(' ');
  return {
    cratesToMove: procs[1],
    fromStack: procs[3] - 1,
    toStack: procs[5] - 1,
  }
}

const updateStacks = (oldStacks, procedures) => {
  const stacks = [...oldStacks];
  // console.log(procedures, stacks);

  procedures.forEach(proc => {
    const {
      cratesToMove,
      fromStack,
      toStack,
    } = formatProcString(proc);
    const removedCrates = stacks[fromStack].splice(stacks[fromStack].length - cratesToMove, cratesToMove);
    stacks[toStack].push(...removedCrates);
  })
  return stacks;
}

const main = async () => {
  const input = await getInput(INPUT_NAME);
  const formattedInput = format(input, '\n');
  const stacksList = (formattedInput[formattedInput.length - 1].split(' ').filter(el => el.length > 0));
  const stackTotal = stacksList[stacksList.length - 1]
  formattedInput.pop()
  const stacks = formatStacks(stackTotal, formattedInput);
  
  const procedureInput = await getInput(PROCEDURE_NAME);
  const procedures = format(procedureInput, '\n');

  const updatedStacks = updateStacks(stacks, procedures);

  const result = [];
  updatedStacks.forEach(stack => {
    result.push(stack[stack.length - 1]);
  })
  console.log(result);
}

main();