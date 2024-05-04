/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let map = new Map();

  function climb(index) {
    if (index >= cost.length) return 0;

    if (map.has(index)) {
      return map.get(index);
    }

    const takeClimb = cost[index] + climb(index + 1);
    const skipClimb = cost[index] + climb(index + 2);

    map.set(index, Math.min(takeClimb, skipClimb));
    return map.get(index);
  }

  return Math.min(climb(0), climb(1));
};

const inputOne = [10, 15, 20];
const inputTwo = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(inputTwo));
