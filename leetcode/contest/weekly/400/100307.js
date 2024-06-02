/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let chairs = 0;
  let empty = 0;
  let fill = 0;

  for (const char of s) {
    if (char === "E") {
      if (empty === 0) {
        chairs++;
        fill++;
      } else {
        empty--;
        fill++;
      }
    } else {
      fill--;
      empty++;
    }
  }

  return chairs;
};

const inputOne = "ELEELEELLL";

console.log(minimumChairs(inputOne));
