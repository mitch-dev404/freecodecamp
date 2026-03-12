import { data } from "./data.js";

function dominoCheck(dominoes) {
  const currentCheck = [];
  currentCheck.push(dominoes[0]);
  let valid = true;
  let count = 0;
  dominoes.forEach((numSet) => {
    if (count > 0) {
      currentCheck.push(numSet);
      if (currentCheck[count - 1][1] !== currentCheck[count][0]) {
        valid = false;
      }
    }
    count += 1;
  });
  return valid;
}

console.log(dominoCheck(data.chain1));
