/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  if (grid.length == 1) return grid[0][0];
  const maxRow = grid.length - 1;
  const maxCol = maxRow;

  let [first, second] = findSmallest(0);

  for (let r = 1; r <= maxRow; r++) {
    const row = grid[r];
    let nextFirst = Infinity;
    let nextSecond = Infinity;
    for (let c = 0; c <= maxCol; c++) {
      // update
      if (c != first) {
        row[c] += grid[r - 1][first];
      } else {
        row[c] += grid[r - 1][second];
      }

      // find the nextFirst and nextSecond
      if (c == 0) {
        nextFirst = c;
      } else if (c == 1) {
        if (row[0] > row[1]) {
          nextFirst = 1;
          nextSecond = 0;
        } else {
          nextSecond = 1;
        }
      } else if (row[nextFirst] >= row[c]) {
        nextSecond = nextFirst;
        nextFirst = c;
      } else if (row[nextSecond] > row[c]) {
        nextSecond = c;
      }
    }

    first = nextFirst;
    second = nextSecond;
  }

  /**
   *
   * @param {number} row
   * @return {number[]}
   */
  function findSmallest(row) {
    let indx1 = null;
    let indx2 = null;

    for (let i = 0; i <= maxCol; i++) {
      if (indx1 === null) {
        indx1 = 0;
      } else if (grid[row][indx1] === grid[row][i]) {
        indx2 = i;
      } else if (grid[row][indx1] > grid[row][i]) {
        indx2 = indx1;
        indx1 = i;
      } else if (indx2 === null) {
        indx2 = i;
      } else if (grid[row][indx2] > grid[row][i]) {
        indx2 = i;
      }
    }

    return [indx1, indx2];
  }

  // console.log(grid);
  return Math.min(grid[maxRow][first], grid[maxRow][second]);
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const gridTwo = [
  [1, 1, 0, 1],
  [4, 1, 11, 3],
  [7, 8, 9, 1],
  [7, 8, 9, 3],
];

const gridThree = [[2]];

const gridFour = [
  [1, 99, 99],
  [0, 2, 1],
  [99, 99, 4],
];

console.log(minFallingPathSum(gridTwo));
[
  [1, 99, 99],
  [99, 1, 1],
  [1, 99, 99],
];
