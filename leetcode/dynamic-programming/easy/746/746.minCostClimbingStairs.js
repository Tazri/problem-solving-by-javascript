/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let map = new Map();

  function climb(index) {
    if (index >= cost.length) {
      return 0;
    }

    if (map.has(index)) {
      return map.get(index);
    }

    let takeClimb = cost[index] + climb(index + 1);
    let skipClimb = 0;

    // calculate skipClimb
    if (index + 1 < cost.length) {
      skipClimb += cost[index + 1];
    }

    if (index + 2 < cost.length) {
      skipClimb += climb(index + 2);
    }

    if (takeClimb < skipClimb) {
      map.set(index, takeClimb);
      return takeClimb;
    } else {
      map.set(index, skipClimb);
      return skipClimb;
    }
  }

  return climb(0);
};

const inputOne = [10, 15, 20];
const inputTwo = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(inputTwo));
