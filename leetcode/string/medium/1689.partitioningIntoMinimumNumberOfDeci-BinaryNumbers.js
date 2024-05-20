/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max = 0;

  for (const char of n) {
    max = Math.max(max, parseInt(char));

    if (max === 9) break;
  }

  return max;
};

const inputOne = "82734";

console.log(minPartitions(inputOne));
