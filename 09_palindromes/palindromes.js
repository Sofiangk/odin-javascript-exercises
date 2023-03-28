const palindromes = function (text) {
  let noSpacesString = text
    .replace(/\s+/g, "")
    .replace(/[^\w\s\']/g, "")
    .toLowerCase();
  return noSpacesString === noSpacesString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
