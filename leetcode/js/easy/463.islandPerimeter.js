/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let isLand = grid[row][col];

      if (!isLand) continue;

      // check up
      if (!grid[row + 1] || !grid[row + 1][col]) perimeter++;

      //  check down
      if (!grid[row - 1] || !grid[row - 1][col]) perimeter++;

      // check left
      if (!grid[row][col - 1]) perimeter++;

      // check right
      if (!grid[row][col + 1]) perimeter++;
    }
  }

  return perimeter;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

const gridOne = [[1]];

const gridTwo = [[1, 0]];

console.log(islandPerimeter(gridTwo));
