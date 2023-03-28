const repeatString = function (string, num) {
  let repeatedString = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= num; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
