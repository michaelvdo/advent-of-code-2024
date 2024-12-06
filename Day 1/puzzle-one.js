import { firstList, secondList } from "./data.js";

const getTotalDistanceBetweenListItems = (listOne, listTwo) => {
  listOne.sort((a, b) => a - b);
  listTwo.sort((a, b) => a - b);

  let totalDistance = 0;

  listOne.forEach((item, itemIndex) => {
    totalDistance += Math.abs(item - listTwo[itemIndex]);
  });

  return totalDistance;
};

const distance = getTotalDistanceBetweenListItems(
  [3, 4, 2, 1, 3, 3],
  [4, 3, 5, 3, 9, 3]
);

console.log(distance);

const result = getTotalDistanceBetweenListItems(firstList, secondList);

console.log(result);
