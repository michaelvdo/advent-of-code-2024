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

  let similarityScore = 0;

  listOne.forEach((item) => {
    similarityScore += listTwoDict[item] ? item * listTwoDict[item] : 0;
  });

  return similarityScore;
};

const computedSimilarity = getSimilarityScore(firstList, secondList);

console.log(computedSimilarity);
