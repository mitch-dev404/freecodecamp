import { data, answers } from "./data.js";
import { passingCount } from "./challenge.js";

const results = [];
const sets = Object.values(data);
const answerKey = Object.values(answers);

function tests() {
  sets.forEach((set, index) => {
    let result;
    if (passingCount(set) === answerKey[index]) {
      result = true;
      results.push(result);
    } else {
      result = false;
      results.push(result);
    }
    console.log(`result: ${passingCount(set)}`)
    console.log(`expected answer: ${answerKey[index]}`);
    console.log("===================");
    console.log("");
  });

  let passed;
  if (results.includes(false)) {
    passed = "FAILED";
  } else {
    passed = "PASSED";
  }
  console.log("*************");
  console.log(`Testing Result: ${passed}`);
  console.log("*************");
}

tests();
