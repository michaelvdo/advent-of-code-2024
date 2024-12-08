import { data } from "./data.js";

const getStringsFromXCoordinates = (XCoordinates) => {
  const stringsFromXCoordinates = [];

  XCoordinates.forEach((coordinate) => {
    const [i, j] = coordinate;

    const right = data[i][j + 1] + data[i][j + 2] + data[i][j + 3];
    const downRight =
      (data[i + 1] || [])[j + 1] +
      (data[i + 2] || [])[j + 2] +
      (data[i + 3] || [])[j + 3];
    const down =
      (data[i + 1] || [])[j] + (data[i + 2] || [])[j] + (data[i + 3] || [])[j];
    const downLeft =
      (data[i + 1] || [])[j - 1] +
      (data[i + 2] || [])[j - 2] +
      (data[i + 3] || [])[j - 3];
    const left = data[i][j - 1] + data[i][j - 2] + data[i][j - 3];
    const upLeft =
      (data[i - 1] || [])[j - 1] +
      (data[i - 2] || [])[j - 2] +
      (data[i - 3] || [])[j - 3];
    const up =
      (data[i - 1] || [])[j] + (data[i - 2] || [])[j] + (data[i - 3] || [])[j];
    const upRight =
      (data[i - 1] || [])[j + 1] +
      (data[i - 2] || [])[j + 2] +
      (data[i - 3] || [])[j + 3];

    stringsFromXCoordinates.push(right);
    stringsFromXCoordinates.push(downRight);
    stringsFromXCoordinates.push(down);
    stringsFromXCoordinates.push(downLeft);
    stringsFromXCoordinates.push(left);
    stringsFromXCoordinates.push(upLeft);
    stringsFromXCoordinates.push(up);
    stringsFromXCoordinates.push(upRight);
  });

  return stringsFromXCoordinates;
};

const getAllXCoordinates = (data) => {
  const NUMBER_OF_ROWS = 140;
  const NUMBER_OF_COLUMNS = 140;

  const XCoordinates = [];

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      if (data[i][j] === "X") {
        XCoordinates.push([i, j]);
      }
    }
  }

  return XCoordinates;
};

const getNumberOfXMAS = (data) => {
  const XCoordinates = getAllXCoordinates(data);
  const stringsFromXCoordinates = getStringsFromXCoordinates(XCoordinates);

  const XMASStrings = stringsFromXCoordinates.filter(
    (string) => string === "MAS"
  );

  return XMASStrings.length;
};

console.log(getNumberOfXMAS(data));
