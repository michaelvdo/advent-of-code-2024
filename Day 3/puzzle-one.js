import { data } from "./data.js";

const mul = (a, b) => a * b;

const getMul = (testString) => {
  const muls = testString.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);
  return muls.reduce((acc, curr) => acc + eval(curr), 0);
};

console.log(getMul(data));
