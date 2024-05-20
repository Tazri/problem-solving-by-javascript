/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const len = grid.length - 2;
  const resultGrid = new Array(len);

  for (let r = 0; r < resultGrid.length; r++) {
    resultGrid[r] = new Array(len);
  }

  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      resultGrid[r][c] = max(r + 1, c + 1);
    }
  }

  function max(r, c) {
    return Math.max(
      grid[r - 1][c], // up
      grid[r - 1][c + 1], // upper right corner
      grid[r][c + 1], // right
      grid[r + 1][c + 1], // lower right corner
      grid[r + 1][c], // lower
      grid[r + 1][c - 1], // lower left corner
      grid[r][c - 1], // left,
      grid[r - 1][c - 1], // upper left corner
      grid[r][c] // it self
    );
  }

  return resultGrid;
};

const gridOne = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

const gridTwo = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(largestLocal(gridOne));
