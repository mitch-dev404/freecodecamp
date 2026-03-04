function countPerfectCubes(a, b) {
  let startNum;
  let endNum;

  if (a > b) {
    startNum = b;
    endNum = a;
  } else {
    startNum = a;
    endNum = b;
  }

  console.log(`startNum: ${startNum}`)
  console.log(`endNum: ${endNum}`)

  let currentNum = startNum;
  let count = 0;

  while (currentNum <= endNum) {
    if (Number.isInteger(Math.cbrt(currentNum))) {
      count += 1;
    }

    currentNum += 1;
  }

  return count;
}

console.log(countPerfectCubes(1, 30));
