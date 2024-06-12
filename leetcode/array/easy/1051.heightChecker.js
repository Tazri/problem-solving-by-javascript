/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const map = new Array(101).fill(0);

  for (let i = 0; i < heights.length; i++) map[heights[i]]++;

  let stack = [];

  for (let i = 100; i >= 1; i--) {
    for (let j = 0; j < map[i]; j++) {
      stack.push(i);
    }
  }

  let count = 0;
  for (const height of heights) {
    if (height !== stack.pop()) count++;
  }

  return count;
};

const inputOne = [1, 1, 4, 2, 1, 3];

console.log(heightChecker(inputOne));
