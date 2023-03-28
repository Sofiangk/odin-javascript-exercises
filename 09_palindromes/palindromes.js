const palindromes = function (text) {
  let noSpacesString = text
    .replace(/\s+/g, "")
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let reversedString = noSpacesString
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  return noSpacesString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
