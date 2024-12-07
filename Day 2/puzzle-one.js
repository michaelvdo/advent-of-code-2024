import { testData, data } from "./data.js";

const isSafe = (acc, report) => {
  let sign;

  const reportIsSafe = report.every((curr, index) => {
    // if first item in array, skip cycle
    if (index === 0) {
      return true;
    }

    // test for absolute difference between current level and previous level
    const prev = report[index - 1];
    const absoluteDifference = Math.abs(curr - prev);
    if (absoluteDifference > 3 || absoluteDifference < 1) {
      return false;
    }

    // test for consistency in sign
    const currentSign = Math.sign(curr - prev);
    if (index < 2) {
      sign = currentSign;
      return true;
    }

    if (currentSign !== sign) return false;

    // all tests passed
    return true;
  });

  return reportIsSafe ? acc + 1 : acc;
};

const getNumberOfSafeReports = (reports) => {
  return reports.reduce(isSafe, 0);
};

console.log(getNumberOfSafeReports(testData));

// console.log(getNumberOfSafeReports(data));
