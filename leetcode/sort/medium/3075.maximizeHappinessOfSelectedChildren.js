/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => a - b);

  let max = 0;
  for (let i = 0; i < k; i++) {
    const happy = happiness.pop() - i;

    max += happy < 0 ? 0 : happy;
  }

  return max;
};

const inputOne = [[1, 2, 3], 2];

console.log(maximumHappinessSum(...inputOne));
