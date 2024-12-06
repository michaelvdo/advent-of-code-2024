import { firstList, secondList } from "./data.js";

const getTotalDistanceBetweenListItems = (listOne, listTwo) => {
  listOne.sort((a, b) => a - b);
  listTwo.sort((a, b) => a - b);

  return listOne.reduce(
    (acc, item, itemIndex) => (acc += Math.abs(item - listTwo[itemIndex])),
    0
  );
};

const distance = getTotalDistanceBetweenListItems(
  [3, 4, 2, 1, 3, 3],
  [4, 3, 5, 3, 9, 3]
);

console.log(distance);

const result = getTotalDistanceBetweenListItems(firstList, secondList);

console.log(result);
