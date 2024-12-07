import { data } from "./data.js";

const mul = (a, b) => a * b;

const getMul = (testString) => {
  const muls = testString.match(/mul[(][0-9]{1,3},[0-9]{1,3}\)/g);

  const sum = muls.reduce((acc, curr) => {
    return acc + eval(curr);
  }, 0);

  return sum;
};

console.log(getMul(data));
