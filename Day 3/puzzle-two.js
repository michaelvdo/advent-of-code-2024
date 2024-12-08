import { data } from "./data.js";

const mul = (a, b) => a * b;

const getMul = (testString) => {
  const muls = testString.match(
    /(mul[(][0-9]{1,3},[0-9]{1,3}\))|(do\(\))|don\'t\(\)/g
  );

  let isStopped = false;

  const filteredMuls = muls.filter((mul) => {
    switch (mul) {
      case "do()":
        isStopped = false;
        return false;
      case "don't()":
        isStopped = true;
        return false;
      default:
        if (isStopped) {
          return false;
        } else {
          return true;
        }
    }
  });

  return filteredMuls.reduce((acc, curr) => acc + eval(curr), 0);
};

console.log(getMul(data));
