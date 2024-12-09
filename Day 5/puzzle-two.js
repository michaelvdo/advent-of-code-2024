import { testRules, testUpdates, puzzleRules, puzzleUpdates } from "./data.js";

const isUpdateInWrongOrder = (rules, update) => {
  return !rules.every((rule) => {
    const orderOne = update.indexOf(rule[0]);
    const orderTwo = update.indexOf(rule[1]);

    if (orderOne === -1 || orderTwo === -1) {
      return true;
    }

    return orderOne < orderTwo;
  });
};

const getRelevantRules = (rules, update) =>
  rules.filter(
    (rule) => update.indexOf(rule[0]) !== -1 && update.indexOf(rule[1]) !== -1
  );

const getCorrectedUpdate = (update, relevantRules) => {
  // Create dictionary of rules to count how many times each rule appears in the update
  const ruleDict = {};
  const newUpdate = [...update];

  relevantRules.forEach((rule) => {
    ruleDict[rule[0]] ? (ruleDict[rule[0]] += 2) : (ruleDict[rule[0]] = 2);
    ruleDict[rule[1]] ? (ruleDict[rule[1]] += 1) : (ruleDict[rule[1]] = 1);
  });

  // Sort the rules array based on the dictionary
  const sortedRules = newUpdate.sort((a, b) => ruleDict[b] - ruleDict[a]);
  return sortedRules;
};

const getSumOfMiddlePagesOfCorrectedUpdates = (rules, updates) => {
  const incorrectUpdates = updates.filter((update) =>
    isUpdateInWrongOrder(rules, update)
  );

  const correctedUpdates = incorrectUpdates.map((incorrectUpdate) => {
    const relevantRules = getRelevantRules(rules, incorrectUpdate);
    return getCorrectedUpdate(incorrectUpdate, relevantRules);
  });

  const sumOfMiddlePages = correctedUpdates.reduce(
    (acc, update) => acc + update[update.length / 2 - 0.5],
    0
  );

  return sumOfMiddlePages;
};

// const sum = getSumOfMiddlePagesOfCorrectedUpdates(testRules, testUpdates); // Expected output: 123
const sum = getSumOfMiddlePagesOfCorrectedUpdates(puzzleRules, puzzleUpdates); // Expected output: 4507

console.log(sum);
