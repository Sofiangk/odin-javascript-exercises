const sumAll = function (startNum, endNum) {
  let sum = 0;
  if (
    !Number.isInteger(startNum) ||
    !Number.isInteger(endNum) ||
    endNum < 0 ||
    startNum < 0
  ) {
    return "ERROR";
  }
  if (startNum > endNum) {
    const temp = startNum;
    startNum = endNum;
    endNum = temp;
  }
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
