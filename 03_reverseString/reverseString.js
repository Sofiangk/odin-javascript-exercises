const reverseString = function (text) {
  let string = "";
  for (let i = text.length - 1; i >= 0; i--) {
    string += text[i];
  }

  return string;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
