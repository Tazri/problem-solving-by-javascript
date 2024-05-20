/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let max = 0;

  function get(pos) {
    if (grid[pos[0]]) {
      return grid[pos[0]][pos[1]];
    }
    return undefined;
  }

  function set(pos, value) {
    grid[pos[0]][pos[1]] = value;
  }

  function getCells(pos) {
    const cells = [
      [pos[0] - 1, pos[1]], // up
      [pos[0], pos[1] + 1], // right
      [pos[0] + 1, pos[1]], // down
      [pos[0], pos[1] - 1], // left
    ];

    return cells.filter((pos) => {
      return get(pos) ? true : false;
    });
  }

  function solve(pos, sum = 0) {
    const value = get(pos);
    set(pos, 0);
    const cells = getCells(pos);

    if (cells.length) {
      for (let cell of cells) solve(cell, sum + value);
    } else {
      max = Math.max(max, sum + value);
    }

    set(pos, value);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (get([i, j])) solve([i, j]);
    }
  }

  return max;
};

const inputOne = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
]; // 24

const inputTwo = [
  [1, 0, 7],
  [2, 0, 6],
  [3, 4, 5],
  [0, 3, 0],
  [9, 0, 20],
]; // 28

const inputThree = [
  [1, 0, 7, 0, 0, 0],
  [2, 0, 6, 0, 1, 0],
  [3, 5, 6, 7, 4, 2],
  [4, 3, 1, 0, 2, 0],
  [3, 0, 5, 0, 20, 0],
]; // 60

console.log(getMaximumGold(inputThree));
