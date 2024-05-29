/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let file = coordinates[0].charCodeAt(0) - "a".charCodeAt(0);
  let rank = parseInt(coordinates[1]);

  rank = rank & 1 ? 1 : 0;
  file = file & 1 ? 1 : 0;

  if (rank === file) return true;
  return false;
};

const inputOne = "c7";

console.log(squareIsWhite(inputOne));
