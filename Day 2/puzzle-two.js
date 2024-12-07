import { testData, data } from "./data.js";

const isEveryLevelSafe = (report) => {
  let sign;
  let indexOfLevelToRemove;

  const reportIsSafe = report.every((curr, index) => {
    // if first item in array, skip cycle
    if (index === 0) {
      return true;
    }

    // test for absolute difference between current level and previous level
    const prev = report[index - 1];
    const absoluteDifference = Math.abs(curr - prev);
    if (absoluteDifference > 3 || absoluteDifference < 1) {
      indexOfLevelToRemove = index;
      return false;
    }

    // test for consistency in sign
    const currentSign = Math.sign(curr - prev);
    if (index < 2) {
      sign = currentSign;
      return true;
    }

    if (currentSign !== sign) {
      indexOfLevelToRemove = index;
      return false;
    }

    // all tests passed
    return true;
  });

  return {
    isSafe: reportIsSafe,
    newReport: report.toSpliced(indexOfLevelToRemove, 1),
  };
};

const isSafeReducer = (acc, report) => {
  const hasSafeVariant = report.findIndex((_, index, array) => {
    return isEveryLevelSafe(array.toSpliced(index, 1)).isSafe;
  });

  return hasSafeVariant > -1 ? acc + 1 : acc;
};

const getNumberOfSafeReports = (reports) => {
  return reports.reduce(isSafeReducer, 0);
};

// console.log(getNumberOfSafeReports(testData));

console.log(getNumberOfSafeReports(data));
