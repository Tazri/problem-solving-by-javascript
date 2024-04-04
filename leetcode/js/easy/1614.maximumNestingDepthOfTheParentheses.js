/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxDepth = 0;

  let currentDepth = 0;
  for (let char of s) {
    if (char === "(") {
      currentDepth++;
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    } else if (char === ")") {
      currentDepth--;
    }
  }

  return maxDepth;
};

function isNum(n) {
  const numSet = new Set("0123456789");
  return numSet.has(n);
}

const s = "(1+(2*3)+((8)/4))+1";

console.log(maxDepth(s));
