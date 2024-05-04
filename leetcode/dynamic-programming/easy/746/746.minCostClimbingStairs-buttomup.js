/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 1) cost[0];
  if (cost.length === 2) Math.min(...cost);

  for (let i = 2; i < cost.length; i++) {
    const skipClimb = cost[i] + cost[i - 2];
    const takeClimb = cost[i] + cost[i - 1];

    cost[i] = Math.min(skipClimb, takeClimb);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

const inputOne = [10, 15, 20];
const inputTwo = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(inputTwo));
