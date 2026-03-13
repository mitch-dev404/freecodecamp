import { data } from "./data.js";
import { isFlat } from "./challenge.js";

// tests
const result = [];
Object.values(data).forEach((set) => {
  result.push(isFlat(set));
});

const tests = [true, false, true, false, false];

if (tests.every((value, index) => value == result[index])) {
  console.log("Success!");
} else {
  console.log("Fail.");
}