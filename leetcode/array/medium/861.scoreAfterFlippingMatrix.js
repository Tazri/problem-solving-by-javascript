/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  const totalRow = grid.length;
  const totalCol = grid[0].length;

  // now count sum
  let pos = totalCol - 1;
  let sum = totalRow * 2 ** pos;

  pos--;
  for (let c = 1; c < totalCol; c++, pos--) {
    let one = 0;
    let zero = 0;
    for (let r = 0; r < totalRow; r++) {
      if (grid[r][0]) {
        if (grid[r][c]) {
          one++;
        } else {
          zero++;
        }
      } else {
        if (grid[r][c]) {
          zero++;
        } else {
          one++;
        }
      }
    }

    sum += Math.max(one, zero) * 2 ** pos;
  }

  return sum;
};

const inputOne = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];

console.log(matrixScore(inputOne));
