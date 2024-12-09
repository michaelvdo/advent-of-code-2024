import { testData, realData } from "./data.js";

const isX_MAS = (coordinates, data) => {
  const [i, j] = coordinates;

  const topLeftDownRight =
    (data[i - 1] || [])[j - 1] + data[i][j] + (data[i + 1] || [])[j + 1];
  const topRightDownLeft =
    (data[i - 1] || [])[j + 1] + data[i][j] + (data[i + 1] || [])[j - 1];

  return (
    topLeftDownRight + topRightDownLeft === "MASMAS" ||
    topLeftDownRight + topRightDownLeft === "SAMSAM" ||
    topLeftDownRight + topRightDownLeft === "SAMMAS" ||
    topLeftDownRight + topRightDownLeft === "MASSAM"
  );
};

const getAll_A_Coordinates = (data) => {
  const NUMBER_OF_ROWS = 140;
  const NUMBER_OF_COLUMNS = 140;

  const XCoordinates = [];

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      if (data[i][j] === "A") {
        XCoordinates.push([i, j]);
      }
    }
  }

  return XCoordinates;
};

const getNumberOfX_MAS = (data) => {
  const A_Coordinates = getAll_A_Coordinates(data);
  console.log(A_Coordinates);
  return A_Coordinates.filter((coordinates) => isX_MAS(coordinates, data))
    .length;
};

console.log(getNumberOfX_MAS(realData));
