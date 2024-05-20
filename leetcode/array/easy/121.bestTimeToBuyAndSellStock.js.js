/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    max = Math.max(max, profit);

    if (prices[left] > prices[right]) {
      left = right;
    }

    right++;
  }

  return max;
};

const inputOne = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(inputOne));
