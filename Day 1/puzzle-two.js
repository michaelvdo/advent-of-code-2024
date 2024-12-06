import { firstList, secondList } from "./data.js";

const getSimilarityScore = (listOne, listTwo) => {
  const listTwoDict = {};

  listTwo.forEach((item) => {
    if (listTwoDict[item]) {
      listTwoDict[item] += 1;
    } else {
      listTwoDict[item] = 1;
    }
  });

  return listOne.reduce(
    (acc, item) => (acc += listTwoDict[item] ? item * listTwoDict[item] : 0),
    0
  );
};

const computedSimilarity = getSimilarityScore(firstList, secondList);

console.log(computedSimilarity);
