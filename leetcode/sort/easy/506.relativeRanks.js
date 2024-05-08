const GM = "Gold Medal";
const SM = "Silver Medal";
const BM = "Bronze Medal";

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const posMap = new Map();
  const result = Array(score.length).fill("");

  for (let i = 0; i < score.length; i++) {
    posMap.set(score[i], i);
  }

  score.sort((a, b) => a - b);

  let i = 1;
  while (score.length) {
    const rank = score.pop();

    if (i === 1) {
      result[posMap.get(rank)] += GM;
    } else if (i === 2) {
      result[posMap.get(rank)] += SM;
    } else if (i === 3) {
      result[posMap.get(rank)] += BM;
    } else {
      result[posMap.get(rank)] += i;
    }

    i++;
  }

  return result;
};

const inputOne = [5, 4, 3, 2, 1];
const inputTwo = [10, 3, 8, 9, 4]; // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log(findRelativeRanks(inputTwo));
