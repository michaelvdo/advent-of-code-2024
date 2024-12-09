import { testRules, testUpdates, puzzleRules, puzzleUpdates } from "./data.js";

const isUpdateInRightOrder = (rules, update) => {
  return rules.every((rule) => {
    const orderOne = update.indexOf(rule[0]);
    const orderTwo = update.indexOf(rule[1]);

    if (orderOne === -1 || orderTwo === -1) {
      return true;
    }

    return orderOne < orderTwo;
  });
};

const getSumOfMiddlePagesOfCorrectUpdates = (rules, updates) => {
  const correctUpdates = updates.filter((update) =>
    isUpdateInRightOrder(rules, update)
  );

  const sumOfMiddlePages = correctUpdates.reduce(
    (acc, update) => acc + update[update.length / 2 - 0.5],
    0
  );

  return sumOfMiddlePages;
};

// const sum = getSumOfMiddlePagesOfCorrectUpdates(testRules, testUpdates); // Expected output: 143
const sum = getSumOfMiddlePagesOfCorrectUpdates(puzzleRules, puzzleUpdates); // Expected output: 143

console.log(sum);
